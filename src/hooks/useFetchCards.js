import { useEffect, useState } from "react";
import { getItems } from "../helpers/getItems";

export const useFetchCards = (initialState) => {
  const [cards, setCards] = useState(initialState);

  const getCards = async () => {
    const cards = await getItems();
    setCards(cards);
  };

  useEffect(() => {
    getCards();
  }, []);

  return {
    cards,
  };
};
