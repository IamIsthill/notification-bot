import "dotenv/config";
import { requireEnv } from "../utils/require-env";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const FACEBOOK_VERIFICATION = requireEnv(process.env.FACEBOOK_WEBHOOK_TOKEN);

export { PORT, FACEBOOK_VERIFICATION };
