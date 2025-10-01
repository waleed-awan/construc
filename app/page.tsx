import FooterConstrc from "@/components/footer";
import ConstructionLanding from "@/components/hero-section";
import ProjectsHero from "@/components/project-hero";
import WhoWeAreSection from "@/components/work";

export default function Home() {
  return (
    <div>
      <ConstructionLanding />
      <WhoWeAreSection/>
      <ProjectsHero/>
      <FooterConstrc/>
    </div>
  );
}
