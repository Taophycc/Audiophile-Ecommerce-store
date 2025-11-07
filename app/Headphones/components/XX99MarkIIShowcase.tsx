import Image from "next/image";
import Link from "next/link";

export default function XX99MarkIIShowcase() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-0 py-20">
      <div className="flex flex-col md:flex-row items-center gap-16 ">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            alt="XX99 Mark II Headphones"
            width={540}
            height={560}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-primary uppercase tracking-[10px] mb-4">New Product</p>
          <h2 className="text-4xl font-bold uppercase mb-6">XX99 Mark II <br /> Headphones</h2>
          <p className="text-black/50  mb-8">
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
          </p>
          <Link href="/products/xx99-mark-two-headphones" className="inline-block bg-primary text-white text-[14px] font-bold py-4 px-8 uppercase tracking-wider hover:bg-accent">
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
