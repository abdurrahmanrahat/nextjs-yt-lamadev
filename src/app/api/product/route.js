import dbConnect from "@/database/dbConnect";
import { NextResponse } from "next/server";
import { toast } from "react-hot-toast";

// POST request for product from add product page
export async function POST(request) {
  try {
    let body = await request.json();

    const db = await dbConnect();
    const productCollection = db.collection("products");

    const result = await productCollection.insertOne(body);
    return NextResponse.json(result);
  } catch (error) {
    toast.error(error.message);
  }
}

// get request for product from db
export async function GET(request) {
  try {
    const db = await dbConnect();
    const productCollection = db.collection("products");

    const result = await productCollection.find().toArray();
    return NextResponse.json(result);
  } catch (error) {
    toast.error(error.message);
  }
}
