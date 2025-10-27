import ActualizarLayout from "components/layouts/ActualizarLayout";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experiencia" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <ActualizarLayout />
}