// Environment and configurations
import { config } from "dotenv";

// Path to Environment variables
config({ path: ".env" });

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT }: any =
  process.env;

export { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT };
