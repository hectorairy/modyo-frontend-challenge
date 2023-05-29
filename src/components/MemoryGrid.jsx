import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useFetchCards } from "../hooks/useFetchCards";
import { MemoryCard } from "./MemoryCard";
import { Button } from "./Button";

export const MemoryGrid = ({ username }) => {
  const { cards, setCards, setResetGame } = useFetchCards([]);
  const [prev, setPrev] = useState(-1);
  const [mistakes, setMistakes] = useState(0);
  const [hits, setHits] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  useEffect(() => {
    if (hits === 10) {
      setIsGameFinished(true);
    }
  }, [hits]);

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
        setMistakes(mistakes + 1);
        setCards([...cards]);
      }, 1000);
    } else {
      setHits(hits + 1);
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

  const handleResetGame = () => {
    setResetGame(true);
    setMistakes(0);
    setHits(0);
    setIsGameFinished(false);
  };

  return (
    <>
      <div className="memory-game__markers">
        <h2>¡ Bienvenido {username} !</h2>
        <div className="memory-game__markers--flex">
          <p>Aciertos: {hits}</p>
          <p>Errores: {mistakes}</p>
        </div>

        {isGameFinished && (
          <Button handleClick={() => handleResetGame()}>
            ¡Jugar de nuevo!
          </Button>
        )}
      </div>
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

MemoryGrid.propTypes = {
  username: PropTypes.string.isRequired,
};
