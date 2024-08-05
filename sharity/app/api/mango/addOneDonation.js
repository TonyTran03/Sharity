import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, date, items } = req.body;

    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      console.log("Connected to MongoDB Atlas!");

      const database = client.db('myDatabase');
      const collection = database.collection('donation');

      // Insert a document with an items array
      await collection.insertOne({ name, date, items });

      
      res.status(201).json({ message: 'Data saved successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong!' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}
