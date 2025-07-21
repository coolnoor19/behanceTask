"use client";
import Image from "next/image";
import  {brands} from "../../utils/Brand";

const BrandGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto py-12 px-4">
      {brands.map((brand, index) => (
        <div
          key={index}
          className={`flex items-center justify-center gap-3 p-4 rounded-xl border border-white/10 bg-black/20 hover:bg-cyan-900/30 transition ${
            brand.name === "Tesla" ? brand.bg : ""
          }`}
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            width={32}
            height={32}
            className="object-contain filter invert"
          />
          <span className="text-white font-medium">{brand.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BrandGrid;
