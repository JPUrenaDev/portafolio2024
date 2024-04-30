import { useState } from "react";

import "./App.css";
import { Header } from "./ui/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-no-repeat bg-cover bg-center bg-[url('./images/magicpattern-starry-night-1713442109328.png')]  object-contain">
        <Header />
      </div>
    </>
  );
}

export default App;
