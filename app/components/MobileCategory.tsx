"use client";
import Image from "next/image";
import Link from "next/link";

export default function MobileCategory() {
  return (
    <div className="grid grid-cols-1 gap-16 px-8 mt-12">
      <div className="relative bg-neutral-gray-1 rounded-lg p-4 flex flex-col items-center pt-20 pb-4">
        <Image
          className="absolute -top-[50px]"
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="Headphones"
          width={150}
          height={120}
        />
        <h3 className="text-lg text-black font-bold mt-1">HEADPHONES</h3>
        <Link
          href="/headphones"
          className="text-gray-500 hover:text-primary text-sm font-bold shop-link mt-3"
        >
          SHOP
        </Link>
      </div>
      <div className="relative bg-neutral-gray-1 rounded-lg p-4 flex flex-col items-center pt-20 pb-4">
        <Image
          className="absolute -top-[50px]"
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="Speakers"
          width={150}
          height={120}
        />
        <h3 className="text-lg font-bold text-black mt-1">SPEAKERS</h3>
        <Link
          href="/speakers"
          className="text-gray-500 hover:text-primary text-sm font-bold shop-link mt-3"
        >
          SHOP
        </Link>
      </div>
      <div className="relative bg-neutral-gray-1 rounded-lg p-4 flex flex-col items-center pt-20 pb-4">
        <Image
          className="absolute -top-[50px]"
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="Earphones"
          width={150}
          height={120}
        />
        <h3 className="text-lg text-black font-bold mt-1">EARPHONES</h3>
        <Link
          href="/earphones"
          className="text-gray-500 hover:text-primary text-sm font-bold shop-link mt-3"
        >
          SHOP
        </Link>
      </div>
    </div>
  );
}
