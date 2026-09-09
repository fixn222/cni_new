"use client";

import { Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import ShareJourneyDialog from "../../components/ShareJourneyDialog";
import { useEffect, useState } from "react";

const feedback = [
  {
    name: "Sarah Mitchell",
    role: "Adventure Traveler",
    image: "https://i.pravatar.cc/100?img=47",
    feedback:
      "CNI Global made our entire trip feel effortless. Every detail was thoughtfully planned, and we discovered places we would never have found on our own.",
  },
  {
    name: "Daniel Perera",
    role: "Family Traveler",
    image: "https://i.pravatar.cc/100?img=12",
    feedback:
      "From the first conversation to the final day, everything was smooth and well organized. We could simply enjoy the journey.",
  },
  {
    name: "Emily Carter",
    role: "Solo Traveler",
    image: "https://i.pravatar.cc/100?img=32",
    feedback:
      "The personalized recommendations made such a difference. It felt like the trip was designed specifically for me.",
  },
];

interface FeedbackData {
  _id: string;
  fullName: string;
  role: string;
  destinationVisited: string;
  review: string;
  rating: number;
}

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState<FeedbackData[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("/api/feedback");

        if (!response.ok) throw new Error("Failed to fetch feedbacks");

        const data = await response.json();

        setFeedbacks(data as FeedbackData[]);
      } catch (error) {
        console.error(
          error instanceof Error ? error.message : "Failed to fetch feedbacks",
        );
      }
    };

    fetchFeedbacks();
  }, []);

  console.log(feedbacks);

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
        {/* SECTION HEADER */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <p className="text-[#ff6b5b] text-sm font-bold uppercase tracking-[0.12em]">
                Traveler Stories
              </p>

              <h2 className="mt-5 text-4xl  font-bold tracking-[-0.03em] text-primary">
                Experiences That
                <br />
                Speak for Themselves
              </h2>
            </div>

            <p className="text-[17px] text-start  text-[#526581] max-w-sm">
              Real journeys, meaningful connections, and memories that stay with
              you long after the trip ends.
            </p>
          </div>
        </ScrollReveal>

        {/* FEEDBACK GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* FEATURED TESTIMONIAL */}
          <ScrollReveal>
            <div className="h-full bouncy-hover cursor-pointer rounded-3xl bg-[#15558b] p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center  justify-between">
                  <Quote
                    size={42}
                    strokeWidth={1.5}
                    className="text-white/40"
                  />

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={17}
                        fill="currentColor"
                        className="text-[#ffb86b]"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-10 text-2xl sm:text-3xl leading-[1.45] font-medium tracking-[-0.02em]">
                  “{feedbacks[0]?.review ?? feedback[0].feedback}”
                </p>
              </div>

              <div className="mt-12 flex items-center  gap-4">
                <img
                  src={feedback[0].image}
                  alt={feedback[0].name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {feedbacks[0]?.fullName ?? feedback[0].name}
                  </h3>

                  <p className="text-white/65 text-sm mt-1">
                    {feedbacks[0]?.role ?? feedback[0].role}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* SMALL TESTIMONIALS */}
          <div className="flex flex-col gap-6 ">
            {feedback.slice(1).map((item) => (
              <ScrollReveal key={item.name}>
                <div className="rounded-3xl  border border-[#edf1f6] bg-white p-8 sm:p-9 shadow-2xl bouncy-hover cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          fill="currentColor"
                          className="text-[#ffb86b]"
                        />
                      ))}
                    </div>

                    <Quote
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#dbeafe]"
                    />
                  </div>

                  <p className="mt-6 text-lg leading-7 text-[#526581]">
                    “{item.feedback}”
                  </p>

                  <div className="mt-7 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-bold text-[#1e293b]">{item.name}</h3>

                      <p className="text-sm text-[#7183a0] mt-1">{item.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <ScrollReveal>
          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[#526581] text-lg">
                Ready to create your own unforgettable story?
              </p>
            </div>

            <ShareJourneyDialog />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
