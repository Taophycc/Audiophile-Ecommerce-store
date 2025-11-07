import Category from "./components/Category";
import Hero from "./home"; // Assuming Hero is now in app/home/index.tsx
import AboutAudioGear from "./components/AboutAudioGear";
import ZX9SpeakerShowcase from "./home/components/ZX9SpeakerShowcase";
import ZX7SpeakerShowcase from "./home/components/ZX7SpeakerShowcase";
import YX1EarphonesShowcase from "./home/components/YX1EarphonesShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <ZX9SpeakerShowcase />
      <ZX7SpeakerShowcase />
      <YX1EarphonesShowcase />
      <AboutAudioGear />
    </main>
  );
}
