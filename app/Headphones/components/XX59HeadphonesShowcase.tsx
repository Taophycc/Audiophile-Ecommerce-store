import Image from "next/image";
import Link from "next/link";

export default function XX59HeadphonesShowcase() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-0 py-20">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
            alt="XX59 Headphones"
            width={540}
            height={560}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold uppercase mb-6">
            XX59 <br /> Headphones
          </h2>
          <p className="text-black/50  mb-8">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Link
            href="/products/xx59-headphones"
            className="inline-block bg-primary text-white text-[14px] font-bold py-4 px-8 uppercase tracking-wider hover:bg-accent"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
