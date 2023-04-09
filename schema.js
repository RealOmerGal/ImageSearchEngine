import { client } from "./db-client.js";

const schemaConfig = {
  class: "Photos",
  vectorizer: "img2vec-neural",
  vectorIndexType: "hnsw",
  moduleConfig: {
    "img2vec-neural": {
      imageFields: ["image"],
    },
  },
  properties: [
    {
      name: "image",
      dataType: ["blob"],
    },
    {
      name: "text",
      dataType: ["string"],
    },
  ],
};

//Migration
await client.schema.classCreator().withClass(schemaConfig).do();
