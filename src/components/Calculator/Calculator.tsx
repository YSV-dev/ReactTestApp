import React, { ChangeEventHandler, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Calculator = () => {
  const [operand1, setOperand1] = useState<number>(0);
  const [operand2, setOperand2] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [result, setResult] = useState<number>(0)

  const onElementLoaded = () => {
    if(!searchParams.get("op2")){
        searchParams.append("op2", "0")
        setSearchParams(searchParams)
        setOperand2(0);
    } else {
        setOperand2(parseFloat(searchParams.get("op2")!))
    }
  }

  React.useEffect(() => {
    onElementLoaded();
  }, [searchParams])
  
  const calc = (operand: string) => {
    switch (operand) {
        case "+":
            setResult( operand1 + operand2 );
            break;
        case "-":
            setResult( operand1 - operand2 );
            break;
        case "*":
            setResult( operand1 * operand2 );
            break;
        case "/":
            setResult( operand1 / operand2 );
            break;
    }
    
  }

  return (
    <div>
      <input type="number" value={operand1} onChange={(e) => setOperand1(parseFloat(e.currentTarget.value))} />
      <button onClick={() => calc("+")}>+</button>
      <button onClick={() => calc("-")}>-</button>
      <button onClick={() => calc("*")}>*</button>
      <button onClick={() => calc("/")}>/</button>
      <span> {operand2}</span>
      <span> = <input disabled value={result}/></span>
    </div>
  );
};

export default Calculator;