import BuildingTheFuture from "@/components/BuildingTheFuture";
import ContactUs from "@/components/ContactUs";
import DealingWithWorries from "@/components/DealingWithWorries";
import ImageGrid from "@/components/ImageGrid";
import Landingpage from "@/components/LandingImage/Landingpage";
import TruthInEngineering from "@/components/TruthInEngineering";
import WhereWeWork from "@/components/WhereWeWork";
import WhyChooseUS from "@/components/WhyChooseUs";
import AboutUs from "@/components/whatwedo/AboutUs";
import Projects from "@/components/whatwedo/Projects";

export default function Home() {
  return (
    <div>
      <Landingpage />
      <AboutUs />
      <Projects />
      <WhereWeWork />
      <WhyChooseUS />
      <TruthInEngineering />
      <DealingWithWorries />
      <BuildingTheFuture />
      <ImageGrid />
      <ContactUs />
    </div>
  );
}
