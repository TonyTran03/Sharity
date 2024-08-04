// testDatabaseConnection.js
const mongoose = require('mongoose');
require('dotenv').config();

// Define a simple schema and model for testing
const testSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const TestModel = mongoose.model('huhhhs', testSchema);

async function testDatabase() {
  // Connect to the MongoDB database using the URI from your environment variables
  const MONGODB_URI = "mongodb+srv://tonyboba03:rYGDu91xPGcEDnir@cluster0.xhjal6w.mongodb.net/Hi?retryWrites=true&w=majority&appName=Cluster0"

  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Create a new document
    const testDocument = new TestModel({ name: 'Test User', age: 30 });
    await testDocument.save();
    console.log('Test document saved:', testDocument);

    // Retrieve the document
    const retrievedDocument = await TestModel.findOne({ name: 'Test User' });
    console.log('Retrieved document:', retrievedDocument);

    // Clean up: delete the test document
    await TestModel.deleteOne({ name: 'Test User' });
    console.log('Test document deleted');

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed');
  }
}

testDatabase();
