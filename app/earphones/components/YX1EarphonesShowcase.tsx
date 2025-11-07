import Image from "next/image";
import Link from "next/link";

export default function YX1EarphonesShowcase() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-10 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
            alt="YX1 Wireless Earphones"
            width={540}
            height={560}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left md:ml-8">
          <p className="text-primary uppercase tracking-[10px] mb-4">
            New Product
          </p>
          <h2 className="text-4xl font-bold uppercase mb-6">
            YX1 Wireless <br /> Earphones
          </h2>
          <p className="text-black/50 mb-8">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <Link
            href="/products/yx1-earphones"
            className="inline-block bg-primary text-white text-[14px] font-bold py-4 px-8 uppercase tracking-wider hover:bg-accent"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
