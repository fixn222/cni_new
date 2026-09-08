"use client";

import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ShareJourneyDialog() {
  const [rating, setRating] = useState(5);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger Button */}
      <DialogTrigger >
        <Button className="rounded-full bg-[#15558b] px-7 py-6 text-white font-bold hover:bg-[#104873]">
          Share Your Journey
          <ArrowRight size={18} />
        </Button>
      </DialogTrigger>

      {/* Dialog */}
      <DialogContent
        className="
          max-w-3xl
          border-[#26364a]
          bg-[#172536]
          text-white
          p-6 sm:p-8
          rounded-2xl
          shadow-2xl
        "
      >
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-white">
            Share Your Journey
          </DialogTitle>

          <DialogDescription className="text-[#8da0b8] text-sm sm:text-base">
            Traveled with us recently? We would love to feature your story on
            our wall!
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
          className="space-y-6 mt-4"
        >
          {/* Rating */}
          <div className="space-y-3">
            <Label className="text-xs font-bold uppercase tracking-wide text-[#d6dfeb]">
              Your Rating
            </Label>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  aria-label={`Rate ${star} out of 5`}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    size={30}
                    strokeWidth={1.5}
                    className={
                      star <= rating
                        ? "fill-[#ff6b5b] text-[#ff6b5b]"
                        : "text-[#526581]"
                    }
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Name + Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label
                htmlFor="full-name"
                className="text-xs font-bold uppercase tracking-wide text-[#d6dfeb]"
              >
                Full Name *
              </Label>

              <Input
                id="full-name"
                name="fullName"
                placeholder="Amara Osei"
                required
                className="h-12 rounded-xl border-[#34455a] bg-[#243246] text-white placeholder:text-[#60738d] focus-visible:ring-[#ff6b5b]"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="role"
                className="text-xs font-bold uppercase tracking-wide text-[#d6dfeb]"
              >
                Role / Job Title
              </Label>

              <Input
                id="role"
                name="role"
                placeholder="Entrepreneur"
                className="h-12 rounded-xl border-[#34455a] bg-[#243246] text-white placeholder:text-[#60738d] focus-visible:ring-[#ff6b5b]"
              />
            </div>
          </div>

          {/* Destination */}
          <div className="space-y-2">
            <Label
              htmlFor="destination"
              className="text-xs font-bold uppercase tracking-wide text-[#d6dfeb]"
            >
              Destination Visited *
            </Label>

            <Input
              id="destination"
              name="destination"
              placeholder="Bali, Indonesia"
              required
              className="h-12 rounded-xl border-[#34455a] bg-[#243246] text-white placeholder:text-[#60738d] focus-visible:ring-[#ff6b5b]"
            />
          </div>

          {/* Review */}
          <div className="space-y-2">
            <Label
              htmlFor="review"
              className="text-xs font-bold uppercase tracking-wide text-[#d6dfeb]"
            >
              Your Review *
            </Label>

            <Textarea
              id="review"
              name="review"
              placeholder="Tell us about the guides, places, and itinerary..."
              required
              className="min-h-[120px] resize-none rounded-xl border-[#34455a] bg-[#243246] text-white placeholder:text-[#60738d] focus-visible:ring-[#ff6b5b]"
            />
          </div>

          {/* Submit */}
          <DialogFooter className="pt-2">
            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-[#ff6b5b] text-white font-bold hover:bg-[#f45b4b] transition-colors"
            >
              Submit Testimonial
              <ArrowRight size={18} />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}