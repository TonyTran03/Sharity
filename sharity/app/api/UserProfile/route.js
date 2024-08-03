// app/api/userProfiles/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import UserProfile from '../../../models/UserProfile';

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
    const userProfile = await UserProfile.create(data);
    return NextResponse.json({ success: true, data: userProfile });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
