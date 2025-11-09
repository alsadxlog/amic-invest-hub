import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/playfair-display";
import "@fontsource/open-sans";

createRoot(document.getElementById("root")!).render(<App />);
