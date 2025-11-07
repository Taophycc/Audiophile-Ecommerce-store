import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-black text-white">
      <div className="max-w-[1110px] mx-auto  py-12 md:py-16">
        {/* Top section: Logo and Nav */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Audiophile Logo"
              width={143}
              height={25}
            />
          </Link>
          <nav className="flex flex-col md:flex-row items-center md:space-x-8 text-sm font-bold mt-5 md:mt-0">
            <Link
              href="/"
              className="text-white uppercase tracking-widest hover:text-primary"
            >
              HOME
            </Link>
            <Link
              href="/headphones"
              className="text-white uppercase tracking-widest hover:text-primary"
            >
              HEADPHONES
            </Link>
            <Link
              href="/speakers"
              className="text-white uppercase tracking-widest hover:text-primary"
            >
              SPEAKERS
            </Link>
            <Link
              href="/earphones"
              className="text-white uppercase tracking-widest hover:text-primary"
            >
              EARPHONES
            </Link>
          </nav>
        </div>

        {/* Middle section: Description */}
        <p className="text-white/50 text-[15px] text-center md:text-left mb-12 md:w-1/2 px-12 md:px-0">
          Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        {/* Bottom section: Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
          <p className="text-white/50 text-sm font-bold">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Facebook">
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Image
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Image
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
