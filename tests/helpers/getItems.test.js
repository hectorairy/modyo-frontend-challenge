import { getItems } from "../../src/helpers/getItems";

describe("getItems tests", () => {
  test("should return an array of 20 items", async () => {
    const items = await getItems();
    expect(items.length).toBe(20);
  });

  test("should return an item with the following attributes", async () => {
    const items = await getItems();

    expect(items[0]).toEqual({
      uuid: expect.any(String),
      name: expect.any(String),
      url_image: expect.any(String),
      stat: expect.any(String),
    });
  });
});
