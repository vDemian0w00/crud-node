import { usePersonaje } from "../context/PersonajeProvider";
import { useNavigate } from "react-router-dom";

export default function PersonajeCard({ p }) {
  const { deletePersonaje } = usePersonaje();
  const nav = useNavigate();

  return (
    <div className="mx-2 my-5 p-3 rounded border border-light">
      <h3>
        Nombre del personaje:{" "}
        <span className="font-monospace fw-semibold text-dark">
          {p.name_per}
        </span>
      </h3>
      <h4 className="pt-2">
        Breve descripción:{" "}
        <p className="font-monospace text-dark">{p.desc_per}</p>
      </h4>
      <h4>
        Edad del personaje:{" "}
        <span className="font-monospace text-dark">{p.age_per}</span> años
      </h4>
      <h4>
        Película en la que participó:{" "}
        <span className="font-monospace text-dark">{p.movie_per}</span>
      </h4>
      <div className="row justify-content-center">
        <div className="col-1 mx-3">
          <button className="btn btn-outline-dark text-white px-5" onClick={() => nav(`/edit/${p.id_per}`)}>Editar</button>
        </div>
        <div className="col-1 mx-3">
          <button className="btn btn-danger text-white px-5" onClick={() => deletePersonaje(p.id_per)}>Borrar</button>
        </div>
      </div>
    </div>
  );
}
