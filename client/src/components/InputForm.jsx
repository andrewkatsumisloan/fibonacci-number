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
      navigate("/results", { state: { fibonnaciNumbers: res.data } });
    });
  };

  return (
    <div className="bg-slate-200 mx-auto px-8 py-2 rounded-full w-fit">
      <div className="font-mono my-2">
        Give me the first _ Fibonnaci numbers!
      </div>
      <div className="">
        <InputNumber
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
