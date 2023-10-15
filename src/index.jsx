import React from "react";
import ReactDOMClient from "react-dom/client";
import { FrontPage } from "./screens/FrontPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FrontPage />);
