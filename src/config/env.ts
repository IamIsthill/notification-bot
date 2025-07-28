import "dotenv/config";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

export { PORT };
