import { createRoot } from "react-dom/client";
import GlobalBehavior from "./Components/GlobalBehavior";
import "./CSS/main.css"

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalBehavior />
  </>
);
