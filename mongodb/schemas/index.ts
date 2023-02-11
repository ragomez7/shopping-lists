import mongoose from "mongoose";
const { Schema } = mongoose;

export const itemSchema = new Schema({
    name: String,
    note: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const categorySchema = new Schema({
    name: String,
    items: { type: [itemSchema], default: []},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const listSchema = new Schema({
    name: String,
    status: { type: String, default: "pending" },
    categories: { type: [categorySchema], default: []},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})