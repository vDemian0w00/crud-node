import { useEffect } from "react";
import { usePersonaje } from "../context/PersonajeProvider";
import PersonajeCard from "./PersonajeCard";

function Index() {
  const { personajes, cargarPersonajes } = usePersonaje();

  useEffect(() => {
    cargarPersonajes();
  }, []);

  function renderPersonajes() {
    if (personajes.length === 0) return "Sin tareas creadas";

    return personajes.map((p) => <PersonajeCard p={p} key={p.id_per} />);
  }
  
  return (
    <div className="">
      <h1 className="font-monospace">Lista de personajes</h1>
      {renderPersonajes()}
    </div>
  );

  
}

export default Index;
