import React from "react";
import { useLocation } from "react-router-dom";
import { LeftCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const fibonacciNumbers = location.state.fibonacciNumbers;

  console.log("From results: ", fibonacciNumbers);

  return (
    <div>
      <div className="flex justify-center items-center font-mono mb-8">
        <span className="text-2xl mr-4">
          <Link to="/">
            <LeftCircleOutlined />
          </Link>
        </span>
        <div className="text-3xl">
          These are the first {fibonacciNumbers.fibonacciNumbers.length}{" "}
          Fibonacci numbers
        </div>
      </div>
      <div className="font-mono text-2xl">{`[${fibonacciNumbers.fibonacciNumbers.join(
        ", "
      )}]`}</div>
    </div>
  );
};

export default ResultPage;
