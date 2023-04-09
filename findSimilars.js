import { client } from "./db-client.js";
import { convertImg } from "./convert-img.js";
import { writeFile, mkdir } from "fs/promises";

//query an image
export const findSimilar = async (className, image, limit, method) => {
  const result = await client.graphql
    .get()
    .withClassName(className)
    .withFields(["image"])
    .withNearImage({ image: convertImg(image) })
    .withLimit(limit)
    .do();

  //If result method is a file, creates files for all results
  if (method === "FILE") {
    const resultsDir = "./results";
    await mkdir(resultsDir);
    for (let i = 0; i < limit; i++) {
      const resultImage = result.data.Get[className][i].image;
      await writeFile(`./${resultsDir}/result-${i}.png`, resultImage, "base64");
    }
  }
};
