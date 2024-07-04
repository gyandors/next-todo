import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://sachin:XDP2FM6vVwNdFjx6@cluster0.nilbj3c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    await client.connect();

    const db = client.db("todos");
    const collection = db.collection("todos");
    const result = await collection.insertOne(req.body);

    res.status(201).json({ id: result.insertedId });

    await client.close();
  }
}
