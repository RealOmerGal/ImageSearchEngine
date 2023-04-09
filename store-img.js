import { convertImg } from "./convert-img.js";
import { client } from "./db-client.js";

export const storeImg = async (className, image, text) => {
  await client.data
    .creator()
    .withClassName(className)
    .withProperties({
      image: convertImg(image),
      text,
    })
    .do();
};
