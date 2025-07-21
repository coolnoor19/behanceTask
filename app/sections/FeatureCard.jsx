// components/FeatureCards.tsx
import { LucideUser, Network, Sparkles } from "lucide-react";
import Button from "../components/Button";

const features = [
  {
    icon: <LucideUser size={32} />,
    title: "Users",
    description:
      "Users describe intent and attach incentives on a one-time or recurring task",
  },
  {
    icon: <Network size={32} />,
    title: "Multi-agent Orchestration (MAO)",
    description:
      "Translate user intent into multi-agent workflow and take action automatically.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "AI Agents",
    description:
      "Distribute economic incentives to creators and guardians of AI agents through blockchain network",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-black text-white max-w-7xl mx-auto gap-2 mt-30">
      <div className="text-center  ">
        <h1 className="font-bold font-[inter] text-[56px] leading-[70px] tracking-[3%] max-w-3xl mx-auto">
          Decentralized multi-Agent Orchestratio Protocol
        </h1>
        <div className="max-w-5xl mx-auto">
          <p className="font-[inter] text-[20px] text-gray-400 leading-[33px] tracking-tighter">
            Meet TARS, your AI Executive Assitant-an intelligent, alwys-on
            partner designed to streamline your workday and supercharge your
            productivity. TARS handles scheduling
          </p>
        </div>

        <div className="flex items-center justify-center mt-10 mb-20">
          <Button />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="border border-[#01BEBB] rounded-3xl h-[500px] w-[320px]  md:w-[450px] gap-2 p-2">
          <div className="flex items-center justify-center h-[70%]">
            <LucideUser size={32} />
          </div>
          <div className="flex flex-col items-center justify-center text-center border border-[#01BEBB] rounded-2xl h-[30%] gap-2">
            <p className="font-bold">Users</p>
            <p className="max-w-sm px-3 text-gray-400 tracking-[-6%]">
              Users describe intent and attach incentives on a one-time or
              recurring task
            </p>
          </div>
        </div>

        <div className="border border-[#01BEBB] rounded-3xl h-[500px] w-[320px] md:w-[450px] gap-2 p-2">
          <div className=" flex items-center justify-center h-[70%]">
            {" "}
            <Network size={32} />
          </div>
          <div className="flex flex-col items-center justify-center text-center border border-[#01BEBB] rounded-2xl h-[30%] gap-2">
            <p className="font-bold">Multi-agent Orchestration (MAO)</p>
            <p className="max-w-sm px-3 text-gray-400 tracking-[-6%]">
              Translate user intent into multi-agent workflow and take action
              automatically.
            </p>
          </div>
        </div>

        <div className="border border-[#01BEBB] rounded-3xl h-[500px] w-[320px] md:w-[450px] gap-2 p-2">
          <div className=" flex items-center justify-center h-[70%] ">
            {" "}
            <Sparkles size={32} className="border-4 border-[#01BEBB] " />
          </div>
          <div className="flex flex-col items-center justify-center text-center border border-[#01BEBB] rounded-2xl h-[30%] gap-2">
            <p className="font-bold">AI Agents</p>
            <p className="max-w-sm px-3 text-gray-400 tracking-[-6%]">
              Distribute economic incentives to creators and guardians of AI
              agents through blockchain network
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
