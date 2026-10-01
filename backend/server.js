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
    const result = await pool.query(
      "SELECT * FROM applications ORDER BY id ASC",
    );
    res.json(result.rows);
  } catch (err) {
    console.error("FULL DATABASE ERROR:", err);
    res.status(500).send("Database error");
  }
});

app.post("/api/applications", async (req, res) => {
  try {
    const { company, role, status } = req.body;

    if (!company || !role || !status) {
      return res.status(400).json({
        status: "fail",
        message: "Company, role and status are required.",
      });
    }

    const queryText =
      "INSERT INTO applications (company, role, status) VALUES($1, $2, $3) RETURNING (id, created_at)";
    const values = [company, role, status];

    const result = await pool.query(queryText, values);

    return res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Database error:", err.message);
  }
});

app.patch("/api/applications/:id", async (req, res) => {
  const target_id = req.params.id;
  const { status } = req.body;

  try {
    const query = `
	UPDATE applications
	SET status = $1
	WHERE id = $2
	RETURNING (id, company, 'status changed to:', status);
	`;

    const values = [status, target_id];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({
      message: "Status successfully updated",
      updatedRecord: result.rows[0],
    });
  } catch (err) {
    console.error("Database error:", err.message);
    res.status(500).json({ error: "Database error" });
  }
});

app.delete("/api/applications/:id", async (req, res) => {
  const target_id = req.params.id;
  const query = "DELETE FROM applications WHERE id = $1 RETURNING *";

  try {
    const values = [target_id];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Application not found" });
    }

    const deletedApplication = result.rows[0];

    console.log(
      `Successfully deleted application for ${deletedApplication.company}`,
    );

    res.status(200).json({
      message: "Application deleted successfully",
      deletedApplication: deletedApplication,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${port}`);
});
