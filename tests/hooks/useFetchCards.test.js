import { renderHook, waitFor } from "@testing-library/react";
import { useFetchCards } from "../../src/hooks/useFetchCards";

describe("useFetchCards tests", () => {
  test("should return the initial state", () => {
    const { result } = renderHook(() => useFetchCards([]));
    const { cards } = result.current;

    expect(cards.length).toBe(0);
  });

  test("should return an array of items", async () => {
    const { result } = renderHook(() => useFetchCards([]));

    await waitFor(
      () => expect(result.current.cards.length).toBeGreaterThan(0),
      {
        timeout: 5000,
      }
    );

    const { cards } = result.current;

    expect(cards.length).toBe(20);
  });
});
