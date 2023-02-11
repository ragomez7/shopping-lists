import { Category } from "../../../../mongodb/models";

export class CategoryNotFoundError extends Error {
    constructor() {
        super();
        this.name = "CategoryNotFoundError";
        this.message = "This category does not exist in the categories resource."
    }
}

export default async function handle(req, res) {
    if (req.method === "GET") {
        const { categoryId } = req.query;
        const categoryIdParamExists = categoryId;
        if (categoryIdParamExists) {
            try {
                const category = await Category.findById(categoryId);
                if (category === null) {
                    throw new CategoryNotFoundError()
                }
                res.status(200).send(category);
            } catch (err) {
                if (err.name === "CategoryNotFoundError") res.status(404).send(err.message);
                else res.status(400).send(err);
            }
        } else {
            try {
                const categoriesList = await Category.find();
                res.status(200).send(categoriesList);
            } catch (err) {
                res.status(400).send(err)
            }
        }

    } else if (req.method === "POST") {
        const { name } = req.query;
        try {
            const createdCategory = await Category.create({
                name
            })
            res.status(201).json(createdCategory)
        } catch (err) {
            res.status(400).send(err)
        }
    } else if (req.method === "PATCH") {
        const { categoryId, name } = req.query;
        const category = await Category.findByIdAndUpdate(categoryId, {
            name,
            updatedAt: new Date()
        }, {
            returnDocument: "after"
        });
        res.status(200).send(category);
    } else if (req.method === "DELETE") {
        const { categoryId } = req.query;
        try {
            const category = await Category.findByIdAndDelete(categoryId);
            if (category === null) {
                throw new CategoryNotFoundError()
            }
            res.status(200).json(category);
        } catch (err) {
            if (err.name === "CategoryNotFoundError") res.status(404).send(err.message);
            else res.status(400).send(err);
        }
    }
}