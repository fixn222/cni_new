import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Feedback, { FeedBackModel } from "@/app/database/feedback.model";

export async function GET() {
  try {
    await connectDB();

    const feedBacks = await Feedback.find();

    return NextResponse.json(feedBacks);
  } catch {
    return NextResponse.json(
      { error: "failed to fetch feedbacks" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body: FeedBackModel = await req.json();

    const feedBack = await Feedback.create(body);

    return NextResponse.json(
      {
        message: "FeedBack submitted successfully",
        feedBack,
      },
      { status: 201 },
    );
  } catch (error) {
    console.log(error instanceof Error ? error.message : "Unknown error");

    return NextResponse.json(
      { error: "failed to submit feedback" },
      { status: 500 },
    );
  }
}
