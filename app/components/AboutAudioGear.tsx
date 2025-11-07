import Image from "next/image";

export default function AboutAudioGear() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 md:px-0 md:py-20 py-20 lg:py-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-27">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 order-2 md:order-2">
          <h2 className="text-4xl text-black lg:text-4xl font-bold uppercase mb-8 tracking-wider leading-tight">
            Bringing you the <br /> <span className="text-primary">best</span>{" "}
            audio gear
          </h2>
          <p className="text-black/50 text-[16px]">
            {" "}
            {/* Color changed */}
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We are a small team of music lovers and sound
            specialists who are devoted to helping you get the most out of
            personal audio. Stop by our store to meet some of the fantastic
            people who make Audiophile the best place to buy your portable audio
            equipment.
          </p>
        </div>

        {/* Image Section (now on the right) */}
        <div className="w-full md:w-1/2 md:order-2 order-1">
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="Man enjoying music with headphones"
            width={540}
            height={588}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
