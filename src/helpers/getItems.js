import { IMG_API } from "./constants";

export const getItems = async () => {
  try {
    const res = await fetch(IMG_API);
    const { entries } = await res.json();
    const items = entries.map((item) => ({
      id: item.meta.uuid,
      name: item.meta.name,
      url_image: item.fields.image.url,
      stat: "",
    }));
    const newItems = [...items, ...items].sort(() => Math.random() - 0.5);
    return newItems;
  } catch (error) {
    console.log(error);
  }
};
