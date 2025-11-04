import { Sequelize, importModels } from "@sequelize/core";

import { PostgresDialect } from "@sequelize/postgres";
import { config } from "dotenv";



config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;
if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_PORT || !DB_NAME) {
  throw new Error("Database environment variables are missing");
}


export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: Number(DB_PORT),
  clientMinMessages: "notice",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  models: [],
});

