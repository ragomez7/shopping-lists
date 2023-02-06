import mongoose from 'mongoose';
const { Schema } = mongoose;

export const itemSchema = new Schema({
    name: String,
    note: String,
    imageUrl: String,
    // category: String,
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
    // userId: { type: mongoose.ObjectId, default: new mongoose.Types.ObjectId()},
    name: String,
    status: { type: String, default: "pending" },
    categories: { type: [categorySchema], default: []},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})