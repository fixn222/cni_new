import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { Card, CardDescription, CardFooter } from "@/components/ui/card";
import LogoLoop from "@/components/LogoLoop";

import {
  SiEmirates,
  SiQatarairways,
  SiSingaporeairlines,
  SiTurkishairlines,
} from "react-icons/si";
import { TRUST_STATS } from "@/lib/constants";
import CountUp from "@/components/CountUp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrollTrigger } from "gsap/all";

const airlineLogos = [
  {
    node: <SiEmirates />,
    title: "Emirates",
    href: "https://www.emirates.com",
  },
  {
    node: <SiQatarairways />,
    title: "Qatar Airways",
    href: "https://www.qatarairways.com",
  },
  {
    node: <SiSingaporeairlines />,
    title: "Singapore Airlines",
    href: "https://www.singaporeair.com",
  },
  {
    node: <SiTurkishairlines />,
    title: "Turkish Airlines",
    href: "https://www.turkishairlines.com",
  },
];

function Trust() {
  return (
    <section className="flex flex-col p-5 " id="trust">
      <ScrollReveal>
        <div className="mt-20 ">
          <LogoLoop
            logos={airlineLogos}
            color="black"
            speed={100}
            direction="left"
            logoHeight={60}
            gap={100}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#0000"
            ariaLabel="Technology partners"
          />
        </div>

        <div className="grid lg:flex lg:flex-row grid-cols-2 flex-col items-center justify-center mt-10">
          {TRUST_STATS.map((trust) => (
            <Card
              className="
                         lg:w-[200px]
                         lg:h-[120px]
                         backdrop-blur-3xl
                         border-0 m-5 text-center
                         justify-center
                         hover:bg-amber-50/5
                         cursor-pointer
                         bouncy-hover                 
                        shadow-2xl
                        "
              key={trust.value}
            >
              <CardDescription>
                <span className="text-primary font-bold text-3xl">
                  <CountUp
                    from={0}
                    to={trust.value}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    delay={0}
                  />
                </span>
                <span className="text-3xl font-bold text-primary">
                  {trust.icon}
                </span>
              </CardDescription>
              <p className="text-primary font-bold">{trust.label}</p>
            </Card>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export default Trust;
