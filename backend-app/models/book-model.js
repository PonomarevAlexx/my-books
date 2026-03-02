import { Schema, model } from "mongoose";

const BookSchema = new Schema(
    {
        titles: [
            {
                type: String,
                required: true,
            },
        ],

        author: [
            {
                type: Schema.Types.ObjectId,
                ref: "Author",
                required: true,
            },
        ],

        bookSeries: {
            type: Schema.Types.ObjectId,
            ref: "BookSeries",
        },

        year: Number,
        publisher: String,
        quantityOfPages: Number,

        ISBN: {
            type: String,
            unique: true,
        },

        cover: String,
        section: String,
        bookBinding: String,
        paper: String,
        weight: Number,
        description: String,
    },
    { timestamps: true },
);

export const BookModel = model("Book", BookSchema);
