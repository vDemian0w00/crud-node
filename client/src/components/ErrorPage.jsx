import { Link } from "react-router-dom";
import React from 'react'

const ErrorPage = () => {
  return (
    <div className="h1 font-monospace">
      Error. Página no existe<br/>
      <Link className="link-info" to={"/"}>Volver a inicio</Link>
    </div>
  )
}

export default ErrorPage
