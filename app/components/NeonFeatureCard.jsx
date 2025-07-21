// app/components/NeonFeatureCard.jsx
// import Image from "next/image";

// export default function NeonFeatureCard({ icon, title, subtitle, description, large }) {
//   return (
//     <div
//       className={`
//         flex flex-col items-center justify-center
//         ${large ? "w-40 h-40 md:w-60 md:h-60" : "w-32 h-32 md:w-56 md:h-56"}
//         border-2 border-cyan-400 rounded-2xl
//         bg-black/70 backdrop-blur-md
//         shadow-[0_0_30px_#06b6d4]
//         transition
//       `}
//     >
//       <Image src={icon} alt={title} width={large ? 60 : 40} height={large ? 60 : 40} />
//       {title && <h3 className="mt-4 text-base md:text-lg font-semibold text-cyan-200 text-center">{title}</h3>}
//       {subtitle && <p className="text-cyan-400 text-center text-xs md:text-base">{subtitle}</p>}
//       {description && <p className="mt-2 text-gray-400 text-center text-xs md:text-sm">{description}</p>}
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";

const NeonFeatureCard = ({title, desc , src}) => {
  return ( 
      <div className="w-[90%] sm:w-[400px] md:w-[460px] border border-[#01BEBB] rounded-[20px] flex flex-col items-center justify-center p-10">
        <div className="p-10">
          <Image src={src} alt="Notion" width={200} height={160} />
        </div>
        <div className="flex items-center justify-center">
          <h1 className="font-[inter] text-[30px] w-[90%] p-6 text-center leading-10 tracking-tight ">
            {title}
          </h1>
        </div>
        <div>
          <p className="font-[inter] text-[18px] text-gray-500 text-center leading-6 tracking-tighter">
            {desc}
          </p>
        </div>
      </div>    
  );
};

export default NeonFeatureCard;
