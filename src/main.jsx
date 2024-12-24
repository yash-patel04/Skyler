import { createRoot } from "react-dom/client";
import GlobalBehavior from "./GlobalBehavior";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalBehavior />
  </>
);
