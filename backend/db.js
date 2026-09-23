// db.js
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: connectionString,
  max: 20,
  min: 4,
  idleTimeoutMillis: 30000,
  connectTimeoutMillis: 5000,
});

/*
pool.on("error", (err, client) => {
  console.error("Unenxpected error on idle database client", err);
});
*/

export default pool;
