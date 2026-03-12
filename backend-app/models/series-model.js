import { Schema, model } from "mongoose";

const BookSeriesSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        publisher: String,
    },
    { timestamps: true },
);

export const BookSeriesModel = model("BookSeries", BookSeriesSchema, "series");
