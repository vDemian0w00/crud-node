import { Form, Formik } from "formik";
import { usePersonaje } from "../context/PersonajeProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

  const [btnText, setBtnText] = useState("Cargar personaje");

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
        setBtnText("Editar personaje");
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
          let regex = /^([A-Za-z .,\d])*$/;
          if (regex.test(values.name_per) && regex.test(values.desc_per) && regex.test(values.movie_per) && Number.parseInt(values.age_per)>0) {
            if (!params.id) {
              await createPersonaje(values);
              Swal.fire({
                icon: "success",
                title: "Proceso finalizado :)",
                text: "Personaje creado correctamente",
              });
            } else {
              await updatePersonaje(params.id, values);
              Swal.fire({
                icon: "success",
                title: "Proceso finalizado :)",
                text: "Personaje editado correctamente",
              });
            }
          }else{
            Swal.fire({
              icon: "error",
              title: "Error en la validación!",
              text: "Introduzca datos correctos, evite el uso de caracteres como '<' o '!' o el uso de números negativos",
            });
            nav("/")
            return
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
                maxLength={30}
                required
                className="form-control"
                type="text"
                name="name_per"
                onChange={handleChange}
                value={values.name_per}
              />
            </div>

            <div className="input-group mb-3">
              <textarea
                maxLength={100}
                required
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
                required
                min={1}
                max={1000}
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
                required
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
