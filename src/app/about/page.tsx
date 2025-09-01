import React from "react";
import AboutHero from "@/components/About/Hero";
import URCMission from "@/components/About/URCMission";
import OurStory from "@/components/About/OurStory";

const AboutPage: React.FC = () => {
  return (
    <div>
      < AboutHero />
      < URCMission />
      <OurStory />
    </div>
  );
};

export default AboutPage;