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

export default function Page() {
  return (
    <>
      <div className="w-full  overflow-hidden">
        {/* Hero Section */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Hero />
        </div>

        {/* Trust Section */}
        <div className="mt-10">
          <Trust />
        </div>

        {/* Destinations Section */}
        <div className="mt-20 mb-20 ">
          <div
            className={`${styles.paddingX}  flex flex-row justify-center items-center w-full`}
          >
            <Destinations />
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="flex min-h-screen items-center justify-center">
        <Goals />
      </div>

      {/* CTA Section */}
      <Cto />

      {/* Feedback Section */}
      <Feedback />

      {/* WhatsApp Floating Button */}
      <Link
        href="https://api.whatsapp.com/send?phone=94729747985"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a]"
      >
        <MessageCircle size={28} strokeWidth={2.5} />
      </Link>

      {/* Footer */}
      <Footer />
    </>
  );
}
