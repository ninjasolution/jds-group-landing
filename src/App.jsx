import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/global.scss";
import MyRoutes from "./routers";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <MyRoutes></MyRoutes>
    </>
  );
}

export default App;
