import AboutAudioGear from "../components/AboutAudioGear";
import Category from "../components/Category";

import HeadphonesBanner from "./components/HeadphonesBanner";
import XX99MarkIIShowcase from "./components/XX99MarkIIShowcase";
import XX99MarkIShowcase from "./components/XX99MarkIShowcase";
import XX59HeadphonesShowcase from "./components/XX59HeadphonesShowcase";

export default function Page() {
  return (
    <main>
      <HeadphonesBanner />
      <XX99MarkIIShowcase />
      <XX99MarkIShowcase />
      <XX59HeadphonesShowcase />
      <Category />
      <AboutAudioGear />
    </main>
  );
}
