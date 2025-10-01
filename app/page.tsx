import FooterConstrc from "@/components/footer";
import ConstructionLanding from "@/components/hero-section";
import WhoWeAreSection from "@/components/work";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ConstructionLanding />
      <WhoWeAreSection/>
      <FooterConstrc/>
    </div>
  );
}
