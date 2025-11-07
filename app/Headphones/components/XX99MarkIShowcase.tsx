import Image from "next/image";
import Link from "next/link";

export default function XX99MarkIShowcase() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-0 py-20">
      <div className="flex flex-col md:flex-row-reverse items-center gap-20">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
            alt="XX99 Mark I Headphones"
            width={540}
            height={560}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl black font-bold uppercase mb-6">
            XX99 Mark I <br /> Headphones
          </h2>
          <p className="text-black/50  mb-8 pr-3">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <Link
            href="/products/xx99-mark-one-headphones"
            className="inline-block bg-primary text-white text-[14px] font-bold py-4 px-8 uppercase tracking-wider hover:bg-accent"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
