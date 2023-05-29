import { useState } from "react";
import { useFetchCards } from "../hooks/useFetchCards";
import { MemoryCard } from "./MemoryCard";

export const MemoryGrid = () => {
  const { cards, setCards } = useFetchCards([]);
  const [prev, setPrev] = useState(-1);

  const checkMatch = (selectedItem) => {
    const firstSelected = cards[prev];
    const secondSelected = cards[selectedItem];
    let stat = "";
    if (firstSelected.uuid !== secondSelected.uuid) {
      stat = "memory-game__card--active-wrong";
    } else {
      stat = "memory-game__card--active-correct";
    }

    firstSelected.stat = stat;
    secondSelected.stat = stat;
    setCards([...cards]);
    setPrev(-1);
    if (stat == "memory-game__card--active-wrong") {
      setTimeout(() => {
        firstSelected.stat = "";
        secondSelected.stat = "";
        setCards([...cards]);
      }, 1000);
    }
  };

  const selectCard = (id) => {
    if (prev < 0) {
      cards[id].stat = "waiting";
      setPrev(id);
    } else {
      checkMatch(id);
    }
  };

  return (
    <>
      <div className="memory-game__grid">
        {cards.map((card, index) => (
          <MemoryCard
            key={index}
            card={card}
            selectCard={selectCard}
            id={index}
          />
        ))}
      </div>
    </>
  );
};
