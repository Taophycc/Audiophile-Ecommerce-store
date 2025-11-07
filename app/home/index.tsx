import Link from "next/link";
import Header from "../components/Header";

export default function Hero() {
  return (
    <div className="md:px-10 text-white md:h-screen bg-[url('/assets/home/mobile/image-header.jpg')] md:bg-[url('/assets/home/desktop/image-hero.jpg')] bg-cover bg-center bg-no-repeat">
      <Header />
      <div className="max-w-[1110px] mx-auto px-6 py-20 md:py-24 lg:py-32">
        <div className="flex flex-col justify-center mt-8 w-full lg:w-1/3 gap-6 text-center lg:text-left">
          <p className="text-white/50 text-mdn tracking-[10px]">NEW PRODUCT</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-[55px] font-bold leading-none">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-white/75 px-5 md:px-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast
          </p>
          <Link
            href="/products/xx99-mark-two-headphones"
            className="bg-primary text-white text-[14px] font-bold w-1/2 md:w-40 py-3 md:px-8 mt-4 uppercase mx-auto lg:mx-0"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </div>
  );
}

/* Group 2 */
