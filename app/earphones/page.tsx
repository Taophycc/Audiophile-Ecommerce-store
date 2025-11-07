import AboutAudioGear from "../components/AboutAudioGear";
import Category from "../components/Category";

import EarphonesBanner from "./components/EarphonesBanner";
import YX1EarphonesShowcase from "./components/YX1EarphonesShowcase";

export default function Page() {
  return (
    <main>
      <EarphonesBanner />
      <YX1EarphonesShowcase />
      <Category />
      <AboutAudioGear />
    </main>
  );
}
