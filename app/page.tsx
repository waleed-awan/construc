import ConstructionFAQ from "@/components/construction-faqs";
import ConstructionServices from "@/components/construction-slider";
import FooterConstrc from "@/components/footer";
import ConstructionLanding from "@/components/hero-section";
import ProjectsHero from "@/components/project-hero";
import ClientSlider from "@/components/swiper";
import WhoWeAreSection from "@/components/work";

export default function Home() {
  return (
    <div>
      <ConstructionLanding />
      <WhoWeAreSection/>
      <ConstructionServices/>
      <ConstructionFAQ/>
      <ProjectsHero/>
      <FooterConstrc/>
    </div>
  );
}
