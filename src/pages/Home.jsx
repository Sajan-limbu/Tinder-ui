import React from "react";
import Card from "../components/Card";
import Rose from "../assets/Rose.webp";
import Yooa from "../assets/Yooa.png";
import Anne from "../assets/Anne-Marie.jpeg";
import Charlize from "../assets/Charlize Theron.webp";
import Ronaldo from "../assets/Ronaldo.jpeg";
import Selena from "../assets/Selena-gomez.jpg";
import Trucu from "../assets/Tricia Helfer.jpg";
import Twiggy from "../assets/Twiggy.webp";
import MESSI from "../assets/MESSI.jpg";

function Home() {
  const cardsData = [
    {
      title: "Rose",
      description:
        "Lead vocalist of BLACKPINK, known for her soulful voice and fashion sense.",
      image: Rose,
    },
    {
      title: "Yooa Si-a",
      description:
        "Main dancer and vocalist of Oh My Girl with powerful performances.",
      image: Yooa,
    },
    {
      title: "Anne Marie",
      description:
        "British singer-songwriter known for hit pop tracks.",
      image: Anne,
    },
    {
      title: "Charlize Theron",
      description:
        "Award-winning actress known for powerful roles.",
      image: Charlize,
    },
    {
      title: "Ronaldo",
      description:
        "World-famous football legend with incredible records.",
      image: Ronaldo,
    },
    {
      title: "Selena Gomez",
      description:
        "Singer, actress, and global pop icon.",
      image: Selena,
    },
    {
      title: "Tricia Helfer",
      description:
        "Model and actress known for sci-fi roles.",
      image: Trucu,
    },
    {
      title: "Twiggy",
      description:
        "Iconic 1960s British fashion model.",
      image: Twiggy,
    },
    {
      title: "Messi",
      description:
        "Iconic Soccer player.",
      image: MESSI,
    },
  ];

  return (
    <div className="px-10 py-6">
      
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#FD2B7B] to-[#FF7158] bg-clip-text text-transparent">
        Connect to World
      </h2>

      {/* 🔥 2 Columns × 4 Rows Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;