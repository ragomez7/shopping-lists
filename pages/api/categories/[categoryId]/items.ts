import { Category } from "../../../../mongodb/models";

export class CategoryNotFoundError extends Error {
    constructor() {
        super();
        this.name = 'CategoryNotFoundError';
        this.message = 'This category does not exist in the categories resource.'
    }
}

export default async function handle(req, res) {
    if (req.method === 'GET') {
        const { categoryId, itemId } = req.query;
        const itemIdParamExists = itemId;
        if (itemIdParamExists) {
            try {
                const category = await Category.findById(categoryId);
                if (category === null) {
                    throw new CategoryNotFoundError()
                }
                const { items } = category;
                const responseBody = {
                    items
                }
                res.status(200).send(responseBody);
            } catch (err) {
                if (err.name === 'CategoryNotFoundError') res.status(404).send(err.message);
                else res.status(400).send(err);
            }
        } else {
            try {
                const category = await Category.findById(categoryId);
                if (category === null) {
                    throw new CategoryNotFoundError()
                }
                const { items } = category;
                const responseBody = {
                    items
                }
                res.status(200).send(responseBody);
            } catch (err) {
                if (err.name === 'CategoryNotFoundError') res.status(404).send(err.message);
                else res.status(400).send(err);
            }
        }

    } else if (req.method === 'POST') {
        const { categoryId, name, note, imageUrl } = req.query;
        try {
            const newItem = {
                name,
                note,
                imageUrl,
            }
            const updatedCategory = await Category.findByIdAndUpdate(categoryId,
                { $push: { items: newItem } },
                { new: true }
            );
            if (updatedCategory === null) {
                throw new CategoryNotFoundError()
            }
            res.status(200).send(updatedCategory);
        } catch (err) {
            if (err.name === 'CategoryNotFoundError') res.status(404).send(err.message);
            else res.status(400).send(err);
        }
    } else if (req.method === 'PATCH') {
        const { categoryId, itemId, name, note, imageUrl } = req.query;
        try {

            const categoryExists = await Category.findById(categoryId);
            
            if (!categoryExists) {
                throw new CategoryNotFoundError()
            }
            const itemToUpdate = categoryExists.items.find((item) => item._id.toString() === itemId);
            const updatedItem = {
                name: name ?? itemToUpdate.name,
                note: note ?? itemToUpdate.note,
                imageUrl: imageUrl ?? itemToUpdate.imageUrl,
                updatedAt: new Date(),
                _id: itemToUpdate._id
            };
            const updatedCategory = await Category.findOneAndUpdate(
                { _id: categoryId, "items._id": itemId },
                { $set: { "items.$": updatedItem }},
                { new: true }
            );
            res.status(200).send(updatedCategory);
        } catch (err) {
            if (err.name === 'CategoryNotFoundError') res.status(404).send(err.message);
            else res.status(400).send(err);
        }
    } else if (req.method === 'DELETE') {
        const { categoryId, itemId } = req.query;
        try {

            const updatedCategory = await Category.findByIdAndUpdate(categoryId,
                { $pull: { items: { _id: itemId } } },
                { new: true }
            );
            if (updatedCategory === null) {
                throw new CategoryNotFoundError()
            }
            res.status(200).send(updatedCategory);
        } catch (err) {
            if (err.name === 'CategoryNotFoundError') res.status(404).send(err.message);
            else res.status(400).send(err);
        }
    }
}