import React from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const fibonnaciNumbers = location.state.fibonnaciNumbers;

  console.log("From results: ", fibonnaciNumbers);

  return (
    <div>
      <h2>
        These are the first {fibonnaciNumbers.fibonnaciNumbers.length} Fibonnaci
        numbers
      </h2>
      <div className="font-mono text-2xl">{`[${fibonnaciNumbers.fibonnaciNumbers.join(
        ", "
      )}]`}</div>
    </div>
  );
};

export default ResultPage;
