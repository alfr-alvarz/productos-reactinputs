import type { Route } from "./+types/home";
import AgregarLayout from "components/layouts/AgregarLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experiencia" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <AgregarLayout />
}