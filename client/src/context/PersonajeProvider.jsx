import { useContext, useState } from "react";
import {
  crearAddRequest,
  delPersonajeRequest,
  getPersonajeRequest,
  getPersonajesRequest,
  updatePersonajeRequest,
} from "../api/connector";
import { Context } from "./PersonajeContext";

export const usePersonaje = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("usePersonaje debe estar dentro de un ContextProvider");
  return context;
};

export const ContextProvider = ({ children }) => {
  const [personajes, setpersonajes] = useState([]);

  async function cargarPersonajes() {
    const response = await getPersonajesRequest();
    setpersonajes(response.data);
  }

  const deletePersonaje = async (id) => {
    try {
      setpersonajes(personajes.filter((p) => p.id_per !== id));
      const response = await delPersonajeRequest(id);
    } catch (error) {
      console.log(error);
    }
  };

  const createPersonaje = async (personaje) => {
    try {
      const response = await crearAddRequest(personaje);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const cargarPersonaje = async (id) => {
    try {
      const response = await getPersonajeRequest(id);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updatePersonaje = async (id, personaje) => {
    try {
      const response = await updatePersonajeRequest(id, personaje);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider
      value={{
        personajes,
        cargarPersonajes,
        deletePersonaje,
        createPersonaje,
        cargarPersonaje,
        updatePersonaje,
      }}
    >
      {children}
    </Context.Provider>
  );
};
