import connectToDatabase from "../config/dbConfig.js"; 

const connection = await connectToDatabase(process.env.STRING_CONNECTION);

export async function getPosts() {
	const db = connection.db("imersao-alura");
	const collectionDB = db.collection("posts");
	return collectionDB.find().toArray();
};
