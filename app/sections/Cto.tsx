"use client";

import {
  MapPin,
  CreditCard,
  Layers3,
  Phone,
  ChevronDown,
} from "lucide-react";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: MapPin,
    title: "Personalized Itineraries",
    description:
      "Tailored travel packages built around your interests, pace, and budget — no two trips alike.",
  },
  {
    icon: CreditCard,
    title: "Seamless Booking",
    description:
      "Transparent pricing with zero hidden fees. What you see is exactly what you pay.",
  },
  {
    icon: Layers3,
    title: "Authentic Experiences",
    description:
      "Verified local guides and cultural immersion — real stories, not tourist traps.",
  },
  {
    icon: Phone,
    title: "24/7 Global Support",
    description:
      "Round-the-clock assistance wherever you are in the world. We never sleep so you can.",
  },
];

export default function Cto() {
  return (
    <section className="w-ful" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT SECTION */}
          <ScrollReveal>
            <div className="max-w-2xl">
              {/* Small heading */}
              <p className="text-[#ff6b5b] text-sm font-bold uppercase tracking-[0.12em]">
                Our Purpose
              </p>

              {/* Main heading */}
              <h2 className="mt-6 text-4xl sm:text-5x leading-[1.15] font-bold tracking-[-0.03em] text-primary">
                Redefining Global Travel
                <br />
                with Purpose & Ease
              </h2>

              {/* First paragraph */}
              <p className="mt-8 text-[17px] leading-7 text-[#526581] max-w-xl">
                CNI Global was founded on a simple belief: travel should feel
                effortless, meaningful, and within reach for everyone. We
                connect dreamers with destinations  removing barriers,
                simplifying logistics, and letting the world open up naturally
              </p>

              {/* Second paragraph */}
              <p className="mt-7 text-[17px] leading-7 text-[#526581] max-w-xl">
                From sunsoaked coastlines to mountain retreats, our curated
                experiences prioritize sustainability, authenticity, and the
                kind of memories that outlast the journey itself.
              </p>

              {/* Button */}
              <button
                type="button"
                className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#15558b] px-8 py-4 text-white font-bold text-base shadow-md transition-all duration-300 cursor-pointer
                 hover:bg-[#104873] hover:shadow-lg"
              >
                Learn Our Goals
                <ChevronDown size={19} strokeWidth={2.5} />
              </button>
            </div>
          </ScrollReveal>

          {/* RIGHT SECTION */}
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border  border-[#edf1f6] bg-white p-7 shadow-2xl bouncy-hover hover:shadow-4xl cursor-pointer"
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf3ff]">
                      <Icon
                        size={25}
                        strokeWidth={2}
                        className="text-[#125a96]"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-lg font-bold text-[#1e293b]">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-[15px] leading-[1.55] text-[#617594]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}