import { Item } from "../../../mongodb/models";

export class ItemNotFoundError extends Error {
    constructor() {
        super();
        this.name = 'ItemNotFoundError';
        this.message = 'This item does not exist in the items resource.'
    }
}

export default async function handle(req, res) {
    if (req.method === 'GET') {
        const { itemId } = req.query;
        const itemExists = itemId;
        if (itemExists) {
            try {
                const item = await Item.findById(itemId);
                if (item === null) {
                    throw new ItemNotFoundError()
                }
                res.status(200).send(item);
            } catch (err) {
                if (err.name === 'ItemNotFoundError') res.status(404).send(err.message);
                else res.status(400).send(err);
            }
        } else {
            try {
                const itemsList = await Item.find();
                res.status(200).send(itemsList);
            } catch (err) {
                res.status(400).send(err)
            }
        }

    } else if (req.method === 'POST') {
        const { name, note, imageUrl, category } = req.query;
        try {
            const createdItem = await Item.create({
                name,
                note,
                imageUrl,
                category,
            })
            res.status(201).json(createdItem)
        } catch (err) {
            res.status(400).send(err)
        }
    } else if (req.method === 'PATCH') {
        const { itemId, name, note, imageUrl, category } = req.query;
        const item = await Item.findByIdAndUpdate(itemId, {
            name,
            note,
            imageUrl,
            category,
            updatedAt: new Date()
        }, {
            returnDocument: 'after'
        });
        res.status(200).send(item);
    } else if (req.method === 'DELETE') {
        const { itemId } = req.query;
        try {
            const item = await Item.findByIdAndDelete(itemId);
            if (item === null) {
                throw new ItemNotFoundError()
            }
            res.status(200).json(item);
        } catch (err) {
            if (err.name === 'ItemNotFoundError') res.status(404).send(err.message);
            else res.status(400).send(err);
        }
    }
}