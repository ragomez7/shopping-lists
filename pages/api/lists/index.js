import { List } from "../../../mongodb/models";
export class ListNotFoundError extends Error {
    constructor() {
        super();
        this.name = 'ListNotFoundError';
        this.message = 'This list does not exist in the lists resource.'
    }
}

export default async function handle(req, res) {
    if (req.method === 'GET') {
        const { listId } = req.query;
        const listIdParamExists = listId;
        if (listIdParamExists) {
            try {
                const list = await List.findById(listId);
                if (list === null) {
                    throw new ListNotFoundError()
                }
                res.status(200).send(list);
            } catch (err) {
                if (err.name === 'ListNotFoundError') res.status(404).send(err.message);
                else res.status(400).send(err);
            }
        } else {
            try {
                const listsArray = await List.find();
                res.status(200).send(listsArray);
            } catch (err) {
                res.status(400).send(err)
            }
        }
    } else if (req.method === 'POST') {
        const { name } = req.query;
        try {
            const createdList = await List.create({ name });
            res.status(201).json(createdList)
        } catch (err) {
            res.status(400).send(err)
        }
    } else if (req.method === 'PATCH') {
        const { listId, status } = req.query;
        const list = await List.findByIdAndUpdate(listId, {
            status,
            updatedAt: new Date()
        }, {
            returnDocument: 'after'
        });
        res.status(200).send(list);
    } else if (req.method === 'DELETE') {
        const { listId } = req.query;
        try {
            const list = await List.findByIdAndDelete(listId);
            if (list === null) {
                throw new ListNotFoundError()
            }
            res.status(200).json(list);
        } catch (err) {
            if (err.name === 'ListNotFoundError') res.status(404).send(err.message);
            else res.status(400).send(err);
        }
    }
}