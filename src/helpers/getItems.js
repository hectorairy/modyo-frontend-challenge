import { IMG_API } from "./constants";

export const getItems = async () => {
  try {
    const res = await fetch(IMG_API);
    const { entries } = await res.json();
    const items = entries.map((item) => ({
      uuid: item.meta.uuid,
      name: item.meta.name,
      url_image: item.fields.image.url,
      stat: "",
    }));
    const cloneItems = structuredClone(items);
    return [...items, ...cloneItems].sort(() => Math.random() - 0.5);
  } catch (error) {
    console.log(error);
  }
};
