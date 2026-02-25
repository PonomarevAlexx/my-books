import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.URI);
const nameDB = "library";
let db;

export async function connectDB() {
    try {
        // Подключаемся к серверу
        await client.connect();
        console.log("Подключение установлено");

        // взаимодействие с базой данных
        db = client.db(nameDB);
    } catch (err) {
        console.dir(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке
        // await client.close();
        // console.log("Подключение закрыто");
    }
}

export function getDB() {
    if (!db) throw new Error("Database not connected");
    return db;
}
