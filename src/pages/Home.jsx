
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
function Home() {
  const cardsData = [
    {
      title: "Rose", description:
        "Lead vocalist of the K-pop girl group BLACKPINK, known for her soulful voice, stage presence, and fashion sense.",
      image: Rose,
    },
    {
      title: "Yooa Si-a",  description:
        "Main dancer and vocalist of Oh My Girl, admired for her powerful performances, charm, and unique solo music style.",
      image: Yooa,
    },
    {
      title: "Anne Marie",  description: "Main dancer and vocalist of Oh My Girl, admired for her powerful performances, charm, and unique solo music style.",
      image: Anne,
    },
    {
      title: "Charlize Theron",  description: "Main dancer and vocalist of Oh My Girl, admired for her powerful performances, charm, and unique solo music style.",
      image: Charlize,
    },
    {
      title: "Ronaldo", description: "Main dancer and vocalist of Oh My Girl, admired for her powerful performances, charm, and unique solo music style.",
      image: Ronaldo,
    },
    {
      title: "Selena Gomez",  description: "Main dancer and vocalist of Oh My Girl, admired for her powerful performances, charm, and unique solo music style.",
      image: Selena,
    },
    {
      title: "Tricia Helfer",  description: "Main dancer and vocalist of Oh My Girl, admired for her powerful performances, charm, and unique solo music style.",
      image: Trucu,
    },
    {
      title: "Twiggy",  description: "Main dancer and vocalist of Oh My Girl, admired for her powerful performances, charm, and unique solo music style.",
      image: Twiggy,
    },

  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#FD2B7B] to-[#FF7158] bg-clip-text text-transparent ">Connect to world</h2>
      <div className="flex h-70 flex-wrap">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            contact={card.contact}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;