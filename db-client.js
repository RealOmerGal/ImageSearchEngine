import weaviate from "weaviate-ts-client";

export const client = await weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});
