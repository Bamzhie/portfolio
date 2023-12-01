// vite.config.js
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

dotenv.config(); // Load environment variables from .env file

export default {
  plugins: [react()],
};
