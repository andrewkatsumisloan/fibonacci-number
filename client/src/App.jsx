import { useState } from "react";
import "./App.css";
import { Input } from "postcss";
import InputForm from "./components/InputForm";

function App() {
  const [fibonacciNumbers, setFibonacciNumbers] = useState([]);
  return (
    <div>
      <div className="font-mono mb-2">Fibonacci Sequence Generator</div>
      <InputForm />
    </div>
  );
}

export default App;
