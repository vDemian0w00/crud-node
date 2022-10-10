import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import PersonajeForm from "./components/PersonajeForm";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./context/PersonajeProvider.jsx";

export default function App() {
  return (
    <div className=" bg-secondary text-white">
      <Navbar />
      <div className="py-4 px-5">
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/add" element={<PersonajeForm />} />
            <Route path="/edit/:id" element={<PersonajeForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ContextProvider>
      </div>
    </div>
  );
}
