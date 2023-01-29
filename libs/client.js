// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "s9vgxamn77",
  apiKey: process.env.API_KEY,
});
