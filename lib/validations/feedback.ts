import { z } from "zod";

export const feedBackSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),

  role: z.string().min(2, "Role is Required"),

  destinationVisited: z.string().min(2, "Destination is required"),

  review: z
    .string()
    .min(10, "Review must be at least 10 characters")
    .max(500, "Review cannot exceed 500 characters"),

  rating: z.number().default(1),
});

export type FeedbackFormData = z.infer<typeof feedBackSchema>;
