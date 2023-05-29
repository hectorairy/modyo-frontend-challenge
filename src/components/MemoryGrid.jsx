import { useFetchCards } from "../hooks/useFetchCards";
import { MemoryCard } from "./MemoryCard";

export const MemoryGrid = () => {
  const { cards } = useFetchCards([]);

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
