"use client";
import { cn } from "../../lib/utils";

const cardData = [
  {
    title: "Predictive Maintenance",
    description: "Anticipate component failures before they occur with our predictive model.",
    bgImage:
      "articulated.png",
    hoverGif:
      "farmer.jpg",
  },
  {
    title: "Automated Reports",
    description: "Receive daily PDF reports with insights and recommendations.",
    bgImage:
      "autorep2.jpg",
    hoverGif:
      "autorep.jpg",
  },
  {
    title: "24/7 Chatbot Support",
    description: "Get instant assistance with our integrated chatbot.",
    bgImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    hoverGif:
      "tractor.jpg",
  },
];

export function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <div key={index} className="max-w-xs w-full mx-auto">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "transition-all duration-500"
            )}
            style={{
              backgroundImage: `url(${card.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                backgroundImage: `url(${card.hoverGif})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10">
              <h1 className="font-bold text-xl md:text-3xl text-gray-50">
                {card.title}
              </h1>
              <p className="font-normal text-base text-gray-50 my-4">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
