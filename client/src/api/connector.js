import axios from "axios";

const HOST = `https://crud-node.up.railway.app/ghibli/`;

export const getPersonajesRequest = async () => await axios.get(HOST);

export const crearAddRequest = async (personaje) =>
  await axios.post(HOST, personaje);

export const delPersonajeRequest = async (id) => await axios.delete(HOST + id);

export const getPersonajeRequest = async (id) => await axios.get(HOST + id);

export const updatePersonajeRequest = async (id, personaje) =>
  await axios.put(HOST + id, personaje);
