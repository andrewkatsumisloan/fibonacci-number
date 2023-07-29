import { useState } from "react";
import "./App.css";
import { Input } from "postcss";
import InputForm from "./components/InputForm";

function App() {
  const [fibonnaciNumbers, setFibonnaciNumbers] = useState([]);
  return (
    <div>
      <div className="font-mono mb-2">Fibonnaci Number Calculator!</div>
      <InputForm />
    </div>
  );
}

export default App;
