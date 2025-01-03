import React from "react";
import "./index.css";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";

function App() {
  return (
      <div className="flex relative h-full w-full bg-zinc-900">
        <Background />
        <Foreground />
      </div>
  );
}
export default App;