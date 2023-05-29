import { useEffect, useState } from "react";
import { getItems } from "../helpers/getItems";

export const useFetchCards = (initialState) => {
  const [cards, setCards] = useState(initialState);
  const [resetGame, setResetGame] = useState(true);

  const getCards = async () => {
    const cards = await getItems();
    setCards(cards);
  };

  useEffect(() => {
    if (resetGame) {
      getCards();
      setResetGame(false);
    }
  }, [resetGame]);

  return {
    cards,
    setCards,
    setResetGame,
  };
};
