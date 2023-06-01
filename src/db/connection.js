require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

const connection = async () => {
    try {
        await client.connect();
        console.log("success")
        const db = client.db("Movies");
        return db.collection("Movie")
    } catch (error) {
        console.log(error);
    }
};

connection();

module.exports = { connection, client}