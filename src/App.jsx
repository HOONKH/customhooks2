import { Component } from "react";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import E from "./components/E";
import F from "./components/F";
import G from "./components/G";

function App() {
  // 자식에게서 끌어다 씀
  return (
    <div>
      <A />
      <B />
      <C />
      <D />
      <E />
      <F />
      <G />
    </div>
  );
}

export default App;
