import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Apple-Full-Stack-Clone/", // <- add this line
  plugins: [react()],
});
