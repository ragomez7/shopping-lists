import { Category, List } from "../../../../../mongodb/models";
import { ListNotFoundError } from "../..";
import { CategoryNotFoundError } from "../../../categories";

class CategoryAlreadyInListError extends Error {
    constructor() {
        super();
        this.name = "CategoryAlreadyInListError";
        this.message = "Category already exists in list. Patch this list instead."
    }
}

export default async function handle(req, res) {
    if (req.method === 'GET') {
        const { listId } = req.query;
        try {
            const list = await List.findById(listId);
            if (list === null) {
                throw new ListNotFoundError()
            }
            const { categories: listCategories } = list;
            res.status(200).send(listCategories);
        } catch (err) {
            if (err.name === 'ListNotFoundError') res.status(404).send(err.message);
            else res.status(400).send(err);
        }
    } else if (req.method === 'POST') {
        const { listId, categoryId, itemId, itemName } = req.query;
        try {
            const category = await Category.findById(categoryId);
            if (category === null) {
                throw new CategoryNotFoundError()
            }
            const itemToInsert = itemName ?  await category.items.find((item) => item.name.toString() === itemName)
                                          :  await category.items.find((item) => item._id.toString() === itemId);
            category.items = [itemToInsert];
            const list = await List.findById(listId);
            const categoryAlreadyInList = list.categories.find((category) => category._id.toString() === categoryId);
            if (categoryAlreadyInList) {
                const { name, note, imageUrl, createdAt, updatedAt } = itemToInsert;
                const itemToInsertDeepCopy = {
                    name,
                    note,
                    imageUrl,
                    createdAt,
                    updatedAt
                }
                const updatedList = await List.findOneAndUpdate(
                    { _id: listId, "categories._id": categoryId },
                    { $push: { "categories.$.items": itemToInsertDeepCopy } },
                    { new: true }
                );
                res.status(200).send(updatedList);
            } else {
                const updatedList = await List.findByIdAndUpdate(listId,
                    { $push: { categories: category } },
                    { new: true }
                )
                res.status(200).send(updatedList);
            }

        } catch (err) {
            if (err.name === 'CategoryNotFoundError' || "CategoryAlreadyInListError") res.status(404).send(err.message);
            else res.status(400).send(err);
        }
    } else if (req.method === 'PATCH') {
        // elemMatch
        // arrayFilters
        // 
        // 
        const { listId, categoryId, itemId } = req.query;
        try {
            const category = await Category.findById(categoryId);
            if (category === null) {
                throw new CategoryNotFoundError()
            }
            let itemToInsert = await category.items.find((item) => item._id.toString() === itemId);
            const { name, note, imageUrl, createdAt, updatedAt } = itemToInsert;
            itemToInsert = {
                name,
                note,
                imageUrl,
                createdAt,
                updatedAt
            }
            console.log(itemToInsert)
            const updatedList = await List.findOneAndUpdate(
                { _id: listId, "categories._id": categoryId },
                { $push: { "categories.$.items": itemToInsert } },
                { new: true }
            );
            // updatedList.categories.items.push(itemToInsert)
            // console.log(updatedList);
            res.status(200).send(updatedList);
        } catch (err) {
            res.status(400).send(err)
        }
    } else if (req.method === 'DELETE') {
        const { listId, categoryId, itemId, itemName, deleteAllInstances } = req.query;
        try {
            let updatedList;
            if (!itemName) {
                updatedList = await List.findOneAndUpdate(
                    { _id: listId, "categories.items._id": itemId },
                    { $pull: { "categories.$.items": { _id: itemId } } },
                    { new: true });
                console.log(updatedList)
                res.status(200).send(updatedList);
            } else {
                if (deleteAllInstances) {
                    updatedList = await List.findOneAndUpdate(
                        { _id: listId, "categories.items.name": itemName },
                        { $pull: { "categories.$.items": { name: itemName } } },
                        { new: true });
                    console.log(updatedList)
                    res.status(200).send(updatedList);
                } else {
                    const firstInstanceOfItemName = await List.findOne(
                        {_id: listId}
                    );
                    for (const category of firstInstanceOfItemName.categories) {
                        if (category._id.toString() === categoryId) {
                            let idx = 0;
                            for (const item of category.items) {
                                console.log(item.name)
                                if (item.name === itemName) {
                                    category.items.splice(idx, 1)
                                    break;
                                }
                            idx += 1;
                            }
                        }
                    }
                    updatedList = await List.findOneAndUpdate(
                        { _id: listId, "categories.items.name": itemName },
                        { $set: firstInstanceOfItemName },
                        { new: true });
                    res.status(200).send(updatedList);
                }

            }


        } catch (err) {
            res.status(400).send(err)
        }
    }
}