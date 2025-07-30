import { tunnelmole } from "tunnelmole";
import { lookup } from "node:dns";
import "dotenv/config";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const DEVELOPMENT = process.env.DEVELOPMENT;

async function resolveDns(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    lookup(url, (err, address) => {
      if (err) {
        reject(new Error(`Failed to resolve dns: ${err}`));
      } else {
        resolve(address);
      }
    });
  });
}

async function startTunnel() {
  if (process.env.DEVELOPMENT === "true") {
    try {
      const { tunnelmole } = await import("tunnelmole");
      const url = await tunnelmole({
        port: PORT,
      });
      const ip = await resolveDns(url);
      console.info(`Running publicly on ${url} and ${ip}`);
    } catch (error) {
      console.error("Tunnelmole failed to start:", error);
    }
  }
}

startTunnel();
