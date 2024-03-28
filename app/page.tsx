import Landingpage from "@/components/LandingImage/Landingpage";
import Header from "@/components/NavBar/Header";
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
    </div>
  );
}
