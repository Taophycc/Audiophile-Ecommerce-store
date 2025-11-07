import Image from "next/image";
import Link from "next/link";

export default function ZX9SpeakerShowcase() {
  return (
    <section className="max-w-[1110px] h-[630px] md:h-[550px] mx-6 md:mx-auto px-6 md:px-10 py-15 md:py-20 lg:py-15 bg-primary rounded-lg overflow-hidden relative flex flex-col">
      {/* Background Pattern */}
      <div className="absolute top-0 -left-30 w-full h-full bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-cover opacity-100"></div>

      <div className="md:relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16 text-white">
        {/* Speaker Image */}
        <div className="w-full lg:w-1/2 flex justify-center md:justify-end md:items-end">
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            width={380}
            height={453}
            className="w-auto h-auto max-w-[200px] md:max-w-[300px] lg:max-w-[410px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 leading-none">
            ZX9 <br /> SPEAKER
          </h2>
          <p className="text-white/75 mb-8">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href="/products/zx9-speaker"
            className="inline-block bg-black text-white text-[14px] font-bold py-4 px-8 uppercase tracking-wider hover:bg-neutral-black"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
}
