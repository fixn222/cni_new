import { div, section } from "motion/react-client";
import React from "react";
import styles from "../styles";
import { DESTINATIONS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import DestinationCard from "@/components/DestinationCard";
function Destinations() {
  return (
    <section className={` ${styles.boxWidth}`} id="destinations">
      <ScrollReveal direction="zoom-in">
        <div className="flex lg:flex-row flex-col justify-between ">
          <div>
            <p className="uppercase text-secondary font-bold">
              explore the globe
            </p>
            <p className="text-4xl font-bold">Popular Destinations</p>
          </div>

          <div className="inline-flex  items-center  bouncy-link  gap-0.5   text-primary mt-2">
            <Link href="#packages" className="">
              All packages
            </Link>
            <span className="">
              <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="left">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2   lg:grid-cols-4 mt-20">
          {DESTINATIONS.map((des) => (
            <DestinationCard
              key={des.header}
              category={des.category}
              duration={des.duration}
              header={des.header}
              imageUrl={des.imageUrl}
              price={des.price}
              rating={des.rating}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Destinations;
