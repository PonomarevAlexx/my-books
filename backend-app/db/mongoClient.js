const { MongoClient } = require("mongodb");

const URI = "mongodb://root:example@localhost:27017/";
const client = new MongoClient(URI);
const nameDB = "library";
let db;

async function connectDB() {
    try {
        // Подключаемся к серверу
        await client.connect();
        console.log("Подключение установлено");

        // взаимодействие с базой данных
        db = client.db(nameDB);
        // const coll = db.collection("books");

        // const cursor = coll.find();

        // for await (const el of cursor) {
        //     console.log(el);
        // }
    } catch (err) {
        console.dir(err);
    } finally {
        // Закрываем подключение при завершении работы или при ошибке
        // await client.close();
        // console.log("Подключение закрыто");
    }
}

function getDB() {
    if (!db) throw new Error("Database not connected");
    return db;
}

module.exports = { connectDB, getDB };
