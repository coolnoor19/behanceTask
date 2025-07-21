// FROM MY PRERPECTIVE
import Image from "next/image";
import React from "react";
import NeonFeatureCard from "./NeonFeatureCard";
import CenterCard from "./CenterCard";

const NeonFeatureSection = () => {
  return (
    <div className="">
      <div className=" flex items-center justify-center ">
        <NeonFeatureCard
          title="Describe your tasks with words"
          desc="This approach enhances efficiency by dividing complex problems into smaller
          "
          src="/notion.svg"
        />
      </div>

      <div className="hidden lg:flex items-center justify-center ">
        <NeonFeatureCard
          title="Take action on tasks automatically"
          desc="In modern AI systems, task dispatching involves assigning specific responsibilities"
          src="/notion.svg"
        />
        <CenterCard />
        <NeonFeatureCard
          title="Dispatch tasks to AI agents in groups"
          desc="In modern AI systems, task dispatching involves assigning specific responsibilities"
          src="/notion.svg"
        />
      </div>  
      <div>
        <div className="flex items-center justify-center">
          <NeonFeatureCard
            title="Dispatch tasks to AI agents in groups"
            desc="In modern AI systems, task dispatching involves assigning specific responsibilities"
            src="/notion.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default NeonFeatureSection;
