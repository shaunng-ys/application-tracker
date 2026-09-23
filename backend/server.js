//server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
const port = 3000;

/*
const applications = [
  { id: 1, company: `TnG`, role: `Software Dev`, status: `applied` },
  { id: 2, company: `Shopee`, role: `Software Engineer`, status: `applied` },
  { id: 3, company: `Grab`, role: `Web Dev`, status: `applied` },
];
*/

app.use(express.json());
app.use(cors());

/*
app.get("/api/applications", (req, res) => {
  res.json(applications);
});
*/

app.get("/api/applications", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM applications");
    res.json(result.rows);
  } catch (err) {
    console.error("FULL DATABASE ERROR:", err);
    res.status(500).send("Database error");
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${port}`);
});
