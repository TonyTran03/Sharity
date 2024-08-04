import clientPromise from '../../../lib/mongodb';

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('your-database-name');

    const items = await db.collection('items').find({}).toArray();

    return new Response(JSON.stringify(items), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch items' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('your-database-name');

    const item = await request.json();
    await db.collection('items').insertOne(item);

    return new Response(JSON.stringify({ message: 'Item added successfully' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to add item' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
