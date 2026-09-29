import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "@/pages/Home";
import Proyectos from "@/pages/Proyectos";
import Requisitos from "@/pages/Requisitos";
import Programas from "@/pages/Programas";
import ProgramaDetalle from "@/pages/ProgramaDetalle";
import Servicios from "@/pages/Servicios";
import Nosotros from "@/pages/Nosotros";
import Galeria from "@/pages/Galeria";
import Contacto from "@/pages/Contacto";
import Faqs from "@/pages/Faqs";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/proyectos", element: <Proyectos /> },
      { path: "/requisitos", element: <Requisitos /> },
      { path: "/programas", element: <Programas /> },
      { path: "/programas/:slug", element: <ProgramaDetalle /> },
      { path: "/servicios", element: <Servicios /> },
      { path: "/nosotros", element: <Nosotros /> },
      { path: "/galeria", element: <Galeria /> },
      { path: "/contacto", element: <Contacto /> },
      { path: "/faqs", element: <Faqs /> },
      { path: "*", element: <Home /> },
    ],
  },
]);