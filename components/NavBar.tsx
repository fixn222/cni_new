"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { NAVIGATION_LINKS } from "@/lib/constants";
import { Button } from "./ui/button";

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="relative z-50 flex h-20 w-full items-center justify-between px-5 md:px-8 lg:px-12">
      {/* Logo */}
      <Link href="/" onClick={closeMenu} className="shrink-0">
        <Image
          src="/cni.png"
          alt="CNI Global logo"
          width={100}
          height={50}
          priority
          className="h-auto w-[85px] md:w-[100px]"
        />
      </Link>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-8 lg:flex">
        <div className="flex items-center gap-6">
          {NAVIGATION_LINKS.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-primary"
            >
              {nav.label}
            </Link>
          ))}
        </div>

        <Button
          variant="secondary"
          className="rounded-full px-6 py-5"
        >
          Book a trip
        </Button>
      </div>

      {/* Mobile menu button */}
      <Button
        type="button"
        variant="ghost"
        onClick={() => setOpen((previous) => !previous)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className="lg:hidden"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="absolute  left-0 right-0 top-20 border-t border-slate-200 bg-white px-5 py-6 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1">
            {NAVIGATION_LINKS.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary"
              >
                {nav.label}
              </Link>
            ))}

            <Button
              variant="secondary"
              onClick={closeMenu}
              className="mt-4 w-full rounded-full py-5"
            >
              Book a trip
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;