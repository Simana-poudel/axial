import BuildingTheFuture from "@/components/BuildingTheFuture";
import ContactUs from "@/components/ContactUs";
import DealingWithWorries from "@/components/DealingWithWorries";
import ImageGrid from "@/components/ImageGrid";
import Landingpage from "@/components/LandingImage/Landingpage";
import TruthInEngineering from "@/components/TruthInEngineering";
import WhereWeWork from "@/components/WhereWeWork";
import WhyChooseUS from "@/components/WhyChooseUs";
import Projects from "@/components/whatwedo/WhatWeDo";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  const backgroundColor = "#001f3f"; // White color
  const textColor = "white";
  const iconColor = "#ffc631";

  return (
    <div>
      <Landingpage />
      <WhatWeOffer />
      <Projects />
      <WhereWeWork />
      <WhyChooseUS
        backgroundColor={backgroundColor}
        textColor={textColor}
        iconColor={iconColor}
      />
      <TruthInEngineering />
      <DealingWithWorries />
      <BuildingTheFuture />
      <ImageGrid />
      <ContactUs />
    </div>
  );
}
