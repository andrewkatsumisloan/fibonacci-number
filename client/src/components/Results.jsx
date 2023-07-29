import React from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const fibonacciNumbers = location.state.fibonacciNumbers;

  console.log("From results: ", fibonacciNumbers);

  return (
    <div>
      <h2 className="font-mono">
        These are the first {fibonacciNumbers.fibonacciNumbers.length} Fibonacci
        numbers
      </h2>
      <div className="font-mono text-2xl">{`[${fibonacciNumbers.fibonacciNumbers.join(
        ", "
      )}]`}</div>
    </div>
  );
};

export default ResultPage;
