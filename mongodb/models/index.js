import mongoose from 'mongoose';
import { itemSchema, categorySchema, listSchema } from '../schemas';

const URL_STRING = process.env.MONGO_DB_CONNECTION_URL;
console.log(URL_STRING)
const conn = mongoose.createConnection(URL_STRING, {
    dbName: "shopping-lists"
})
export const Item = mongoose.models.Item || conn.model('Item', itemSchema);
export const Category = mongoose.models.Category || conn.model('Category', categorySchema);
export const List = mongoose.models.List || conn.model('List', listSchema);