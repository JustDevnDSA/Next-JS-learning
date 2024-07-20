import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

// connecting to the database
const loadDB = async () => {
  await ConnectDB();
};
// calling the database connecting function
loadDB();

// Getting all the todos from database
export async function GET(request) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

// creating todo in database
export async function POST(request) {
  const { title, description } = await request.json();

  await TodoModel.create({
    title,
    description,
  });

  return NextResponse.json({ msg: "Todo Created" });
}

// deleting todo from database using thier id
export async function DELETE(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");

  await TodoModel.findByIdAndDelete(mongoId);

  return NextResponse.json({ msg: "Todo Deleted" });
}

// updating todo isCompleted status from database using thier id
export async function PUT(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndUpdate(mongoId, {
    $set: {
      isCompleted: true,
    },
  });

  return NextResponse.json({msg:"Todo Completed"})
}
