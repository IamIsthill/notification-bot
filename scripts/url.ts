import { tunnelmole } from "tunnelmole";
import { PORT } from "../src/config/env";

async function startTunnel() {
  try {
    const url = await tunnelmole({ port: PORT });
    console.log(`${new Date().toISOString()}: Public url`, url);
  } catch (error) {
    console.error("Tunnel error:", error);
    setTimeout(startTunnel, 3000); // Retry after 3 seconds
  }
}

startTunnel();
