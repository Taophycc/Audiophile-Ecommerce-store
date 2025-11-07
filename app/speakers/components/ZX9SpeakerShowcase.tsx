import Image from "next/image";
import Link from "next/link";

export default function ZX9SpeakerShowcase() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-10 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
            alt="ZX9 Speaker"
            width={540}
            height={560}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left md:ml-10">
          <p className="text-primary uppercase tracking-[10px] mb-4">New Product</p>
          <h2 className="text-4xl font-bold uppercase mb-6">ZX9 <br /> Speaker</h2>
          <p className="text-black/50 mb-8">
            Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
          </p>
          <Link href="/products/zx9-speaker" className="inline-block bg-primary text-white text-[14px] font-bold py-4 px-8 uppercase tracking-wider hover:bg-accent">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
