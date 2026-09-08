import React from "react";
import styles from "../styles";
import { Button } from "@/components/ui/button";
import { PlayIcon, PhoneCall } from "lucide-react";
import HeroImages from "../../components/HeroImages";
import { HERO_CONTENT } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

export default function Hero() {
  return (
    <ScrollReveal>
      <section
        id="home"
        className={`${styles.paddingY} ${styles.boxWidth} w-full flex flex-col md:flex-row justify-between items-center mt-50 lg:mt-10 `}
      >
        <ScrollReveal>
          <div className="flex flex-col  items-start gap-y-5 ">
            <div className="p-3 bg-primary/10 rounded-4xl text-sm text-center ">
              <p className="font-bold uppercase   ">
                Premium Travel Experiences
              </p>
            </div>

            <p className="text-6xl font-romana text-primary font-bold">
              {HERO_CONTENT.title}
            </p>

            <p className="text-xl text-gray-400">{HERO_CONTENT.description}</p>

            <div className="flex flex-col md:flex-row gap-5 mt-3">
              <Button
                variant="secondary"
                className={
                  "p-5 rounded-4xl cursor-pointer h-12 font-bold bouncy-button"
                }
              >
                {HERO_CONTENT.primaryButton.label}
              </Button>
              <Button
                variant={"outline"}
                className={
                  "p-5 rounded-4xl font-bold h-12 cursor-pointer bouncy-button"
                }
              >
                {" "}
                <PhoneCall className="mr-2" />{" "}
                {HERO_CONTENT.secondaryButton.label}
              </Button>
            </div>
          </div>
        </ScrollReveal>
        <div className="flex flex-col m-5 mt-20 ">
          <HeroImages />
        </div>
      </section>
    </ScrollReveal>
  );
}
