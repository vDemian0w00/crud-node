import { Form, Formik } from "formik";
import { usePersonaje } from "../context/PersonajeProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PersonajeForm() {
  const { createPersonaje, cargarPersonaje, updatePersonaje } = usePersonaje();
  const params = useParams();

  const nav = useNavigate();

  const [personaje, setPersonaje] = useState({
    name_per: "",
    desc_per: "",
    age_per: "",
    movie_per: "",
  });

  const [btnText, setBtnText] = useState("Cargar personaje")

  useEffect(() => {
    setPersonaje({
      name_per: "",
      desc_per: "",
      age_per: "",
      movie_per: "",
    });
    const loadPersonaje = async () => {
      if (params.id) {
        const personaje = await cargarPersonaje(params.id);
        setPersonaje({
          name_per: personaje.name_per,
          desc_per: personaje.desc_per,
          age_per: personaje.age_per,
          movie_per: personaje.movie_per,
        });
        setBtnText("Editar personaje")
      }
    };
    loadPersonaje();
  }, []);

  return (
    <div>
      <h1>{params.id ? "Editar personaje" : "Crear personaje"}</h1>

      <Formik
        initialValues={personaje}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (!params.id) {

            await createPersonaje(values);
          } else {
            await updatePersonaje(params.id, values);
          }

          setPersonaje({
            name_per: "",
            desc_per: "",
            age_per: "",
            movie_per: "",
          });
          nav("/");
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <label className="input-group-text">Nombre de personaje</label>
              <input
                className="form-control"
                type="text"
                name="name_per"
                onChange={handleChange}
                value={values.name_per}
              />
            </div>

            <div className="input-group mb-3">
              <textarea
                className="form-control"
                name="desc_per"
                rows="3"
                onChange={handleChange}
                value={values.desc_per}
              ></textarea>
              <label className="input-group-text">
                Breve descripción del personaje
              </label>
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text">
                Edad que tiene el personaje
              </label>
              <input
                className="form-control"
                type="number"
                name="age_per"
                onChange={handleChange}
                value={values.age_per}
              />
              <label className="input-group-text">
                Película en la que aparece
              </label>
              <input
                className="form-control"
                type="text"
                name="movie_per"
                onChange={handleChange}
                value={values.movie_per}
              />
            </div>

            <div className="row px-2">
              <button
                className="btn btn-dark"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Cargando..." : btnText}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PersonajeForm;
