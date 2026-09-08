import React from "react";
import styles from "./styles";
import Hero from "./sections/Hero";
import NavBar from "@/components/NavBar";
import Trust from "./sections/Trust";
import Destinations from "./sections/Destinations";
import Goals from "./sections/Goals";
import Cto from "./sections/Cto";
import Feedback from "./sections/Feedback";
import Link from "next/link";

import { MessageCircle } from "lucide-react";
import Footer from "./sections/Footer";
export default function page() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <Hero />
        </div>

<div className="">

        <Trust />
</div>


        <div className={`flex justify-center h-screen items-center ${styles.paddingX} mb-20  mt-20`}>
          <Destinations />
        </div>

      </div>
      <div className={``}>
        <Goals />
      </div>
      <Cto />
      <Feedback />
      <Link
        href="https://api.whatsapp.com/send?phone=94729747985"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a]"
      >
        <MessageCircle size={28} strokeWidth={2.5} />
      </Link>
      <Footer />
    </>
  );
}
