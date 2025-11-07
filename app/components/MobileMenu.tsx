"use client";
import Link from "next/link";
import MobileCategory from "./MobileCategory";

export default function MobileMenu() {
  return (
    <div className="md:hidden absolute top-[90px] left-0 right-0 bg-white text-black p-6 z-10">
      <nav className="flex flex-col items-center space-y-4">
        <Link
          href="/"
          className="text-black uppercase tracking-widest hover:text-primary"
        >
          HOME
        </Link>
        <Link
          href="/headphones"
          className="text-black uppercase tracking-widest hover:text-primary"
        >
          HEADPHONES
        </Link>
        <Link
          href="/speakers"
          className="text-black uppercase tracking-widest hover:text-primary"
        >
          SPEAKERS
        </Link>
        <Link
          href="/earphones"
          className="text-black uppercase tracking-widest hover:text-primary"
        >
          EARPHONES
        </Link>
      </nav>
      <MobileCategory />
    </div>
  );
}
