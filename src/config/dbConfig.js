import { MongoClient } from "mongodb";

export default async function connectToDatabase(stringConnection) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConnection);
        console.log("Connected successfully to server");
        await mongoClient.connect();
        console.log("Database connected successfully");

        return mongoClient;
    } catch (error) {
        console.error("Failed to connect to database", error);
        process.exit();
    };
};
