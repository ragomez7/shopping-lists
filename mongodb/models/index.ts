import mongoose from "mongoose";
import { itemSchema, categorySchema, listSchema } from "../schemas";

export const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);
export const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);
export const List = mongoose.models.List || mongoose.model("List", listSchema);