import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import UserProfile from '../../../models/UserProfile';
import createUser from '../../../lib/user';  // Import the create function from lib/user.js

// Handle GET request
export async function GET() {
  await dbConnect();
  try {
    const userProfiles = await UserProfile.find({});
    return NextResponse.json({ success: true, data: userProfiles });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// Handle POST request
export async function POST(request) {
  await dbConnect();
  try {
    const data = await request.json();
    await createUser(data, (err) => {
      if (err) {
        return NextResponse.json({ success: false, error: err.message });
      }
      return NextResponse.json({ success: true, data });
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
