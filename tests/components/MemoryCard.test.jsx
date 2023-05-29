import { fireEvent, render } from "@testing-library/react";
import { MemoryCard } from "../../src/components/MemoryCard";

describe("<MemoryCard /> tests", () => {
  const cardItem = {
    stat: "",
  };
  const selectCard = jest.fn();
  const id = 1;
  const { container } = render(
    <MemoryCard card={cardItem} id={id} selectCard={selectCard} />
  );
  const card = container.querySelector(".memory-game__card");

  test("should execute selectCard func once when is clicked", () => {
    fireEvent.click(card);
    expect(selectCard).toBeCalled();
  });

  test("should execute selectCard func with id value when is clicked", () => {
    fireEvent.click(card);
    expect(selectCard).toBeCalledWith(id);
  });
});
