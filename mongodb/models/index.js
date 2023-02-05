import mongoose from 'mongoose';
import { itemSchema, categorySchema, listSchema } from '../schemas';

const conn = mongoose.createConnection("mongodb+srv://admin:mlxWu1NyQwSO6zu8@cluster0.oc6ex8c.mongodb.net/shopping-lists?retryWrites=true&w=majority", {
    dbName: "shopping-lists"
})
export const Item = mongoose.models.Item || conn.model('Item', itemSchema);
export const Category = mongoose.models.Category || conn.model('Category', categorySchema);
export const List = mongoose.models.List || conn.model('List', listSchema);