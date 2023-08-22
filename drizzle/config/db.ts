import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
require("dotenv").config();

export const __prod__: boolean = process.env.NODE_ENV === "production";

export const connection = mysql.createPool({
  host: __prod__ ? process.env.DB_HOST : "localhost",
  user: __prod__ ? process.env.DB_USER : "root",
  database: "test",
  password: __prod__ ? process.env.DB_PW : "password",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  ssl: { rejectUnauthorized: __prod__ ? true : false },
  debug: false,
});

export const db = drizzle(connection, { logger: true });

await migrate(db, { migrationsFolder: "drizzle" })
  .then((res) => console.log("res migrations: ", res))
  .catch((err) => console.log("err migrations: ", err));
