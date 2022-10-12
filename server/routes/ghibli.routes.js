import { Router } from "express";
import { pool } from "../DB.js";

const router = Router();

//obtener todos los personajes
router.get("/ghibli", async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from personajes order by date_per asc"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

//agregar un personaje
router.post("/ghibli", async (req, res) => {
  try {
    const { name_per, desc_per, age_per, movie_per } = req.body;
    const [result] = await pool.query(
      "insert into personajes(name_per, desc_per, age_per, movie_per) values (?, ?, ?, ?)",
      [name_per, desc_per, age_per, movie_per]
    );
    console.log(result);
    res.json({
      id: result.insertId,
      name_per,
      desc_per,
      age_per,
      movie_per,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//actualizando una tarea
router.put("/ghibli/:id", async (req, res) => {
  try {
    const [result] = await pool.query(
      "update personajes set ? where id_per=?",
      [req.body, req.params.id]
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: `Personaje con id ${req.params.id} no existe` });
    }

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//obteniendo UNA tarea
router.get("/ghibli/:id", async (req, res) => {
  try {
    const [result] = await pool.query(
      "select * from personajes where id_per=?",
      [req.params.id]
    );

    if (result.length === 0)
      return res
        .status(404)
        .json({ message: `Personaje con id ${req.params.id} no existe` });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
//borrando un personaje
router.delete("/ghibli/:id", async (req, res) => {
  try {
    const [result] = await pool.query("delete from personajes where id_per=?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: `Personaje con id ${req.params.id} no existe` });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
