"use client";

import Image from "next/image";
import { ScrollReveal } from "./ui/ScrollReveal";

const img = (id: string, width: number, height: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=85`;

export default function HeroImages() {
  return (
    <div className="hidden h-[480px] grid-cols-2 gap-4 lg:grid">
      {/* Left column */}
      <div className="flex flex-col gap-4">
        <ScrollReveal
          direction="zoom-in"
          delay={0.15}
          className="group flex-grow cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl"
        >
          <Image
            src={img("1541417904950-b855846fe074", 340, 290)}
            alt="Tropical beach"
            width={340}
            height={290}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </ScrollReveal>

        <ScrollReveal
          direction="zoom-in"
          delay={0.3}
          className="group h-[180px] cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl"
        >
          <Image
            src={img("1533240332313-0db49b459ad6", 340, 180)}
            alt="Mountain hike"
            width={340}
            height={180}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </ScrollReveal>
      </div>

      {/* Right column */}
      <div className="mt-8 flex flex-col gap-4">
        <ScrollReveal
          direction="zoom-in"
          delay={0.2}
          className="group h-[200px] cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl"
        >
          <Image
            src={img("1766938975952-a97583120896", 340, 200)}
            alt="Cultural temple"
            width={340}
            height={200}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </ScrollReveal>

        <ScrollReveal
          direction="zoom-in"
          delay={0.35}
          className="group flex-grow cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl"
        >
          <Image
            src={img("1619118986411-29b465253365", 340, 260)}
            alt="Palm beach"
            width={340}
            height={260}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}