import BuildingTheFuture from "@/components/BuildingTheFuture";
import DealingWithWorries from "@/components/DealingWithWorries";
import ImageGrid from "@/components/ImageGrid";
import Landingpage from "@/components/LandingImage/Landingpage";
import TruthInEngineering from "@/components/TruthInEngineering";
import WhereWeWork from "@/components/WhereWeWork";
import WhyChooseUS from "@/components/WhyChooseUs";
import WhatWeDo from "@/components/whatwedo/WhatWeDo";
import WhatWeOffer from "@/components/WhatWeOffer";
import Numbers from "@/components/Numbers";
import Sponsers from "@/components/Sponsers";
import WhoWeAreForHome from "@/components/WhoWeAreForHome";

export default function Home() {
  const backgroundColor = "#204A9F"; // White color
  const textColor = "white";
  const iconColor = "#ffc631";

  return (
    <div>
      <Landingpage />
      <Numbers />
      <WhoWeAreForHome />

      <WhatWeOffer />
      <WhatWeDo />
      <WhereWeWork />
      <WhyChooseUS
        backgroundColor={backgroundColor}
        textColor={textColor}
        iconColor={iconColor}
      />
      <TruthInEngineering />
      <Sponsers />

      <BuildingTheFuture />
      <ImageGrid />
      <DealingWithWorries />
    </div>
  );
}
