import { createRoot } from "react-dom/client";
import GlobalBehavior from "./Components/GlobalBehavior";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalBehavior />
  </>
);
