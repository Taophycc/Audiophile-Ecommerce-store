import AboutAudioGear from "../components/AboutAudioGear";
import Category from "../components/Category";

import SpeakersBanner from "./components/SpeakersBanner";
import ZX9SpeakerShowcase from "./components/ZX9SpeakerShowcase";
import ZX7SpeakerShowcase from "./components/ZX7SpeakerShowcase";

export default function Page() {
  return (
    <main>
      <SpeakersBanner />
      <ZX9SpeakerShowcase />
      <ZX7SpeakerShowcase />
      <Category />
      <AboutAudioGear />
    </main>
  );
}
