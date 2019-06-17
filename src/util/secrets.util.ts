// import logger from "./logger.util";

import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
 //   logger.debug("Using .env file to supply config environment variables");
    dotenv.config({ path: ".env" });
} else {
  //  logger.debug("Using .env.example file to supply config environment variables");
    dotenv.config({ path: ".env.example" });  // you can delete this after you create your own .env file!
}
export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as 'dev'

export const SESSION_SECRET = process.env["SESSION_SECRET"];

if (!SESSION_SECRET) {
  //  logger.error("No client secret. Set SESSION_SECRET environment variable.");
    process.exit(1);
}

export const CLOUDANT_URI = prod ? process.env["CLOUDANT_URI"] : process.env["CLOUDANT_URI_LOCAL"];

if (!CLOUDANT_URI) {
  //  logger.error("No cloudant connection string. Set CLOUDANT_URI environment variable.");
    process.exit(1);
}

export const CLOUDANT_USERNAME = prod ? process.env["CLOUDANT_USERNAME"] : process.env["CLOUDANT_USERNAME_LOCAL"];

if (!CLOUDANT_USERNAME) {
  //  logger.error("No cloudant username. Set CLOUDANT_USERNAME environment variable.");
    process.exit(1);
}

export const CLOUDANT_PASSWORD = prod ? process.env["CLOUDANT_PASSWORD"] : process.env["CLOUDANT_PASSWORD_LOCAL"];

if (!CLOUDANT_PASSWORD) {
 //   logger.error("No cloudant password. Set CLOUDANT_PASSWORD environment variable.");
    process.exit(1);
}