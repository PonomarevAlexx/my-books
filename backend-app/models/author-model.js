import { Schema, model } from "mongoose";

const AuthorSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        birth: String,
        death: String,
        country: String,
        language: String,
        photo: String,
        info: String,
    },
    { timestamps: true },
);

export const AuthorModel = model("Author", AuthorSchema);
