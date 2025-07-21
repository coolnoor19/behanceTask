import Image from "next/image";

const logos = [
  { src: "/hdfc.svg", alt: "NEAR" },
  { src: "/tinder.svg", alt: "Bittensor" },
  { src: "/linked.svg", alt: "APTOS" },
  { src: "/indeed.svg", alt: "Tezos" },
  { src: "/coingecko.svg", alt: "CoinGecko" },
  { src: "/google.svg", alt: "Public AI" },
  { src: "/apple.svg", alt: "Miracle Plus" },
  { src: "/kotak.svg", alt: "Cohere" },
  { src: "/openai.svg", alt: "Acme Corp" },
  { src: "/chart.svg", alt: "Stability AI" },
  { src: "/coingecko.svg", alt: "Shadow" },
  { src: "/file.svg", alt: "OpenVC" },
  { src: "/openai.svg", alt: "Open AI" },
  { src: "/notion.svg", alt: "Notion" },
  { src: "/mongo.svg", alt: "MongoDB" },
  { src: "/bnb.svg", alt: "BNB" },
];

export default function Supporters() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[35px] font-normal mb-12 tracking-[0.1%] border border-amber-300 sm:text-center md:text-center">Supporters & Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition duration-300 p-6 rounded-xl flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
