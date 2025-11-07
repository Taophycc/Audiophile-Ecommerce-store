
import Link from "next/link";

export default function ZX7SpeakerShowcase() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-0 py-20 lg:py-15">
      <div className="relative rounded-lg overflow-hidden">
        {/* Background image for ZX7 */}
        <div className="absolute inset-0 bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] bg-cover bg-center"></div>

        <div className="relative z-10 flex flex-col items-start justify-center h-[320px] p-12 md:p-24 text-black ">
          <h2 className="text-4xl font-bold uppercase mb-6">ZX7 SPEAKER</h2>
          <Link
            href="/products/zx7-speaker"
            className="inline-block border border-black text-black text-[14px] font-bold py-4 px-8 uppercase tracking-wider hover:bg-black hover:text-white"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
