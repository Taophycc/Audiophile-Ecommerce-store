import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <div className="bg-white py-30 md:pt-50">
      <div className="max-w-[1110px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-25 md:gap-10 px-8 md:px-0">
          <div className="relative max-h-[200px] bg-neutral-gray-1 rounded-lg p-8 flex flex-col items-center pt-28 pb-8">
            <Image
              className="absolute -top-[75px]"
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt="Headphones"
              width={220}
              height={170}
            />
            <h3 className="text-xl text-black font-bold mt-1">HEADPHONES</h3>
            <Link
              href="/headphones"
              className="text-gray-500 hover:text-primary text-sm font-bold shop-link mt-3"
            >
              SHOP
            </Link>
          </div>
          <div className="relative max-h-[200px] bg-neutral-gray-1 rounded-lg p-8 flex flex-col items-center pt-28 pb-8">
            <Image
              className="absolute -top-[75px]"
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt="Speakers"
              width={220}
              height={170}
            />
            <h3 className="text-xl font-bold text-black mt-1">SPEAKERS</h3>
            <Link
              href="/speakers"
              className="text-gray-500 hover:text-primary text-sm font-bold shop-link mt-3"
            >
              SHOP
            </Link>
          </div>
          <div className="relative max-h-[200px] bg-neutral-gray-1 rounded-lg p-8 flex flex-col items-center pt-28 pb-8">
            <Image
              className="absolute -top-[75px]"
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt="Earphones"
              width={220}
              height={170}
            />
            <h3 className="text-xl text-black font-bold mt-1">EARPHONES</h3>
            <Link
              href="/earphones"
              className="text-gray-500 hover:text-primary text-sm font-bold shop-link mt-3"
            >
              SHOP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
