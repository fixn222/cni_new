"use client";

import DriftWall from "@/components/DriftWall";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FaS } from "react-icons/fa6";

export const items = [
  {
    image: "https://picsum.photos/id/1015/600/400",
    title: "Peaks",
    href: "https://example.com/one",
  },
  {
    image: "https://picsum.photos/id/1025/600/400",
    title: "Pup",
    href: "https://example.com/two",
  },
  {
    image: "https://picsum.photos/id/1039/600/400",
    title: "Falls",
    href: "https://example.com/three",
  },
  {
    image: "https://picsum.photos/id/1043/600/400",
    title: "Forest",
    href: "https://example.com/four",
  },
  {
    image: "https://picsum.photos/id/1050/600/400",
    title: "Ocean",
    href: "https://example.com/five",
  },
  {
    image: "https://picsum.photos/id/1069/600/400",
    title: "Desert",
    href: "https://example.com/six",
  },
  {
    image: "https://picsum.photos/id/1074/600/400",
    title: "Lake",
    href: "https://example.com/seven",
  },
  {
    image: "https://picsum.photos/id/1084/600/400",
    title: "Valley",
    href: "https://example.com/eight",
  },
  {
    image: "https://picsum.photos/id/1080/600/400",
    title: "Canyon",
    href: "https://example.com/nine",
  },
  {
    image: "https://picsum.photos/id/1016/600/400",
    title: "River",
    href: "https://example.com/ten",
  },
];
const images = [
  { src: "/images/landscape-1.jpg", alt: "Mountain lake" },
  { src: "/images/landscape-2.jpg", alt: "Forest path" },
  { src: "/images/landscape-3.jpg", alt: "Rocky summit" },
  { src: "/images/landscape-4.jpg", alt: "Ocean shore" },
  { src: "/images/landscape-5.jpg", alt: "Green meadow" },
  { src: "/images/landscape-6.jpg", alt: "Desert light" },
];

export default function Goals() {
  return (
    <section className="w-full   max-w-7xl  mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row  items-center gap-12">
        <ScrollReveal>
          {/* Left Section */}
          <div className="w-full ">
            <p className="uppercase text-secondary font-bold tracking-wider">
              Explore the globe
            </p>

            <h2 className="text-4xl lg:text-5xl text-primary font-bold mt-3">
              Discover Your Next Adventure
            </h2>

            <p className="text-gray-600 mt-6 max-w-lg">
              Explore breathtaking destinations, unforgettable experiences, and
              exciting adventures around the world.
            </p>

            <button className="mt-8 bg-secondary text-white px-6 py-3 rounded-full">
              Explore Destinations →
            </button>
          </div>
        </ScrollReveal>

        {/* Right Section */}
        <div className="w-full ">
          <DriftWall
            items={items}
            columns={3}
            tileWidth={180}
            tileHeight={120}
            gap={16}
            speed={42}
            className="h-[500px] sm:h-[250px]"
            grayscale={false}
          />
        </div>
      </div>
    </section>
  );
}
