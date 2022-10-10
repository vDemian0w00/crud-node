import { Router } from "express";
import { pool } from "../DB.js";

const router = Router();

router.get("/ping", async (req, res) => {
  const [ rows, fields ] = await pool.execute("select 1 + 1 as result");
  console.log(rows);
  res.json(rows[0]['result']);
});

export default router;
