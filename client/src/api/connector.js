import axios from "axios";
import { PORT } from "../../../server/config.js";

const HOST = `http://localhost:${PORT}/ghibli/`;

export const getPersonajesRequest = async () => await axios.get(HOST);

export const crearAddRequest = async (personaje) =>
  await axios.post(HOST, personaje);

export const delPersonajeRequest = async (id) => await axios.delete(HOST + id);

export const getPersonajeRequest = async (id) => await axios.get(HOST + id);

export const updatePersonajeRequest = async (id, personaje) =>
  await axios.put(HOST + id, personaje);
