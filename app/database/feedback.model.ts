import mongoose from "mongoose";

export interface FeedBackModel {
  fullName: string;
  role: string;
  destinationVisited: string;
  review: string;
  rating: number;
}

const FeedbackSchema = new mongoose.Schema<FeedBackModel>(
  {
    fullName: {
      type: String,
      required: true,
      minLength: 2,
    },

    role: {
      type: String,
      required: [true, "Role is Required"],
    },

    destinationVisited: {
      type: String,
      required: [true, "Destination is required"],
    },

    review: {
      type: String,
      minLength: 10,
      maxLength: 500,
    },

    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Feedback =
  mongoose.models.Feedback ||
  mongoose.model<FeedBackModel>("Feedback", FeedbackSchema);

export default Feedback;
