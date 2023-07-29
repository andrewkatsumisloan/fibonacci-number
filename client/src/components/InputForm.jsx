import React, { useState } from "react";
import { Button, InputNumber } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const [NFib, setNFib] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios.post("http://localhost:5000/generate_fib", { NFib }).then((res) => {
      console.log(res.data);
      navigate("/results", { state: { fibonacciNumbers: res.data } });
    });
  };

  return (
    <div className="bg-slate-200 mx-auto rounded-3xl w-fit px-6 py-4">
      <div className="font-mono">Give me the first _ Fibonacci numbers!</div>
      <div className="flex justify-center mt-4 mb-2 items-center">
        <InputNumber
          className="mr-2"
          min={1}
          defaultValue={5}
          value={NFib}
          onChange={(value) => setNFib(value)}
        />
        <Button type="primary" onClick={handleSubmit}>
          Calculate
        </Button>
      </div>
    </div>
  );
};

export default InputForm;
