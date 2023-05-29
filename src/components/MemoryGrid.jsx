import { useEffect, useState } from "react";
import { MemoryCard } from "./MemoryCard";
import { IMG_API } from "../utils/constants";

export const MemoryGrid = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(IMG_API)
      .then((res) => res.json())
      .then(({ entries }) => {
        const items = entries.map((item) => ({
          id: item.meta.uuid,
          name: item.meta.name,
          url_image: item.fields.image.url,
          stat: "",
        }));
        const newItems = [...items, ...items].sort(() => Math.random() - 0.5);
        setCards(newItems);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <div className="memory-game__grid">
        {cards.map((card, index) => (
          <MemoryCard key={index} card={card} />
        ))}
      </div>
    </>
  );
};
