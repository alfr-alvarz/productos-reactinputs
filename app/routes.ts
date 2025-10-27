import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/agregar", "routes/agregar.tsx"),
    route("/actualizar", "routes/actualizar.tsx")
] satisfies RouteConfig;
