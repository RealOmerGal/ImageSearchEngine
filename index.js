import { findSimilar } from "./findSimilars.js";
import { storeImg } from "./store-img.js";
import { readFileSync } from "fs";

//Store an image in the database
// const img = readFileSync("./img.png");
// try {
//   storeImg("Photos", img, "Test image");
// } catch (e) {
//   console.log(e);
// }

//Find all similar photos already existing in the database
const findSimilarTo = readFileSync("./code.PNG");
findSimilar("Photos", findSimilarTo, 3, "FILE");
