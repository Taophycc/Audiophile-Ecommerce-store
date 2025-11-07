import Image from "next/image";
import Link from "next/link";

export default function YX1EarphonesShowcase() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-0 py-20 lg:py-0">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width={540}
            height={320}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 bg-neutral-gray-1 rounded-lg flex flex-col items-start justify-center p-12 h-[320px]">
          <h2 className="text-4xl font-bold uppercase mb-6">YX1 EARPHONES</h2>
          <Link href="/products/yx1-earphones" className="inline-block border border-black text-black text-[14px] font-bold py-4 px-8 uppercase tracking-wider hover:bg-black hover:text-white">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
