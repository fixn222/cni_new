"use client";

import Link from "next/link";
import {
  ArrowUpRight ,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { BsFacebook , BsInstagram , BsLinkedin  } from "react-icons/bs";

const footerLinks = {
  Explore: [
    { label: "Destinations", href: "#destinations" },
    { label: "Travel Packages", href: "#packages" },
    { label: "Our Services", href: "#services" },
    { label: "Travel Stories", href: "#feedback" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Purpose", href: "#purpose" },
    { label: "Contact Us", href: "#contact" },
    { label: "Book a Trip", href: "#booking" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0d1b2e] text-white" id="footer">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#15558b]/20 blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#ff6b5b]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* ───────────── TOP CTA ───────────── */}
        <div className="border-b border-white/10 py-20 lg:py-28">

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">

            <div>
              <p className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-[#ff6b5b]">
                Your next chapter
              </p>

              <h2 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                The world is waiting.
                <br />
                <span className="text-white/45">
                  Where will you go?
                </span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-6 lg:items-end">

              <p className="max-w-md text-base leading-7 text-[#8da0b8] lg:text-right">
                Tell us where you want to go, and we’ll help turn the idea
                into a journey worth remembering.
              </p>

              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#ff6b5b] px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f45b4b] hover:shadow-[0_12px_30px_rgba(255,107,91,0.2)]"
              >
                Start Your Journey

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

            </div>

          </div>

        </div>

        {/* ───────────── MAIN FOOTER ───────────── */}
        <div className="grid grid-cols-1 gap-14 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:py-20">

          {/* BRAND */}
          <div className="max-w-sm">

            <Link href="/" className="inline-flex items-center gap-3">

              {/* Replace with your actual logo */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#15558b]">
                <span className="text-lg font-black">C</span>
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight">
                  CNI Global
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8da0b8]">
                  Travel & Experiences
                </p>
              </div>

            </Link>

            <p className="mt-7 text-[15px] leading-7 text-[#8da0b8]">
              Meaningful journeys. Thoughtful experiences. A world waiting
              to be explored.
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-3">

              {[
                { icon : BsInstagram, href: "#", label: "Instagram" },
                { icon: BsFacebook, href: "#", label: "Facebook" },
                { icon: BsLinkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#8da0b8] transition-all duration-300 hover:border-[#ff6b5b] hover:bg-[#ff6b5b] hover:text-white"
                >
                  <Icon size={17} />
                </Link>
              ))}

            </div>

          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>

              <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.12em] text-white">
                {title}
              </h3>

              <ul className="space-y-4">

                {links.map((link) => (
                  <li key={link.label}>

                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-[15px] text-[#8da0b8] transition-colors duration-300 hover:text-white"
                    >
                      {link.label}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>

                  </li>
                ))}

              </ul>

            </div>
          ))}

          {/* CONTACT */}
          <div>

            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.12em] text-white">
              Get in Touch
            </h3>

            <div className="space-y-5">

              {/* WhatsApp */}
              <Link
                href="https://api.whatsapp.com/send?phone=94729747985"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-[#ff6b5b]"
                />

                <span className="text-[15px] leading-6 text-[#8da0b8] transition-colors group-hover:text-white">
                  +94 70 352 2518
                </span>
              </Link>

              {/* Email */}
              <Link
                href="mailto:hello@cniglobal.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-[#ff6b5b]"
                />

                <span className="text-[15px] leading-6 text-[#8da0b8] transition-colors group-hover:text-white">
                  admin@cniglobal.com
                </span>
              </Link>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#ff6b5b]"
                />

                <span className="text-[15px] leading-6 text-[#8da0b8]">
                  Sri Lanka
                  <br />
                  Exploring the world, one journey at a time.
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* ───────────── NEWSLETTER ───────────── */}
        <div className="border-t border-white/10 py-10">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-lg font-bold">
                Stay inspired.
              </p>

              <p className="mt-1 text-sm text-[#8da0b8]">
                Get travel inspiration and new experiences in your inbox.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 focus-within:border-[#ff6b5b]/60"
            >
              <Mail size={17} className="ml-3 shrink-0 text-[#8da0b8]" />

              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-[#60738d]"
              />

              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6b5b] text-white transition-colors hover:bg-[#f45b4b]"
              >
                <Send size={16} />
              </button>
            </form>

          </div>

        </div>

        {/* ───────────── BOTTOM BAR ───────────── */}
        <div className="flex flex-col gap-8 border-t border-white/10 py-8 sm:flex-row sm:items-end sm:justify-between">

          {/* Copyright */}
          <div>
            <p className="text-sm text-[#60738d]">
              © {new Date().getFullYear()} CNI Global. All rights reserved.
            </p>

            <div className="mt-3 flex flex-wrap gap-6 text-sm text-[#60738d]">

              <Link
                href="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>

            </div>
          </div>

          {/* ───────────── DESIGNER SIGNATURE ───────────── */}
          <div className="text-left sm:text-right">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#60738d]">
              Crafted with purpose
            </p>

            <p className="mt-2 text-xl font-bold tracking-tight text-white">
              Fixn
              <span className="text-[#ff6b5b]">
                Tech
              </span>
            </p>

            <p className="mt-1 text-xs text-[#60738d]">
              Design & Development
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}