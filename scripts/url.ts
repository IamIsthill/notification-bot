import { tunnelmole } from "tunnelmole";

import { PORT } from "../src/config/env";

async function getPublicUrl() {
  const url = await tunnelmole({
    port: PORT,
  });
  return url;
}

console.log(`${new Date().toISOString()}: Public url `, getPublicUrl());
