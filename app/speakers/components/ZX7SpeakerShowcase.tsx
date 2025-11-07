import Image from "next/image";
import Link from "next/link";

export default function ZX7SpeakerShowcase() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-10 py-20">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
            alt="ZX7 Speaker"
            width={540}
            height={560}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold uppercase mb-6">
            ZX7 <br /> Speaker
          </h2>
          <p className="text-black/50 pr-8 mb-8">
            Stream high quality sound wirelessly with minimal to no loss. The
            ZX7 speaker uses high-end audiophile components that represents the
            top of the line powered speakers for home or studio use.
          </p>
          <Link
            href="/products/zx7-speaker"
            className="inline-block bg-primary text-white text-[14px] font-bold py-4 px-8 uppercase tracking-wider hover:bg-accent"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
