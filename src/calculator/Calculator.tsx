import { ChangeEvent, useEffect, useState } from "react";
import {
  StyledButtons,
  StyledCalculator,
  StyledInput,
} from "./Calculator.styled";
import { CalculatorButton } from "./components";
import {
  isOperationString,
  findStackTopString,
  findIndexStackTopString,
  operationsMap,
} from "./helpers";

function Calculator() {
  const [stack, setStack] = useState<string[]>([]);

  useEffect(() => {
    console.log(stack);
  }, [stack]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value;
    console.log("handleInputChange; value: %o", value);
  };

  const clearAll = () => setStack([]);

  // TODO: implement (ran out of time)
  const calculate = () => {
    let value: number;
    let operation: (a: number, b: number) => number;
    if (stack.length === 3) {
      operation = operationsMap[stack[1]];
      value = operation(parseFloat(stack[0]), parseFloat(stack[2]));
      setStack([value.toString()]);
    } else if (stack.length === 4) {
      operation = operationsMap[stack[1]];
      value = operation(parseFloat(stack[0]), parseFloat(stack[2]));
      setStack([value.toString(), stack[3]]);
    }
  };

  const handleClick = (newValue: string) => () => {
    const stackSize = stack.length;
    const stackTop = stack[stackSize - 1];
    const stackTopIsOperation = isOperationString(stackTop);
    const newValueIsOperation = isOperationString(newValue);

    if (!stackSize) {
      setStack(stackTopIsOperation ? [] : [newValue]);
      return;
    } else if (stackTopIsOperation && newValueIsOperation) {
      stack[stackSize - 1] = newValue;
    } else if (!stackTopIsOperation && !newValueIsOperation) {
      const hasPeriod = stackTop.includes(".");
      stack[stackSize - 1] =
        stackTop + (hasPeriod && newValue.includes(".") ? "" : newValue);
    } else {
      stack.push(newValue);
    }
    /* TODO: either here or somewhere else check if ready to calculate (order of operations), and if so, calculate (ran out of time) */
    setStack([...stack]);
  };

  const toggleSign = () => {
    if (!stack.length) {
      return;
    }
    const str = findStackTopString(stack);
    stack[findIndexStackTopString(stack)] = (parseFloat(str) * -1).toString();
    setStack([...stack]);
  };

  const handlePercent = () => {
    if (!stack.length) {
      return;
    }
    const str = findStackTopString(stack);
    stack[findIndexStackTopString(stack)] = (parseFloat(str) / 100).toString();
    setStack([...stack]);
  };

  return (
    <StyledCalculator>
      <StyledInput
        value={findStackTopString(stack)}
        onChange={handleInputChange}
      />
      <StyledButtons>
        <CalculatorButton onClick={clearAll} variant="secondary">
          AC
        </CalculatorButton>
        <CalculatorButton onClick={toggleSign} variant="secondary">
          +/-
        </CalculatorButton>
        <CalculatorButton onClick={handlePercent} variant="secondary">
          %
        </CalculatorButton>
        <CalculatorButton onClick={handleClick("/")} variant="primary">
          ÷
        </CalculatorButton>
        <CalculatorButton onClick={handleClick("7")}>7</CalculatorButton>
        <CalculatorButton onClick={handleClick("8")}>8</CalculatorButton>
        <CalculatorButton onClick={handleClick("9")}>9</CalculatorButton>
        <CalculatorButton onClick={handleClick("*")} variant="primary">
          x
        </CalculatorButton>
        <CalculatorButton onClick={handleClick("4")}>4</CalculatorButton>
        <CalculatorButton onClick={handleClick("5")}>5</CalculatorButton>
        <CalculatorButton onClick={handleClick("6")}>6</CalculatorButton>
        <CalculatorButton onClick={handleClick("-")} variant="primary">
          -
        </CalculatorButton>
        <CalculatorButton onClick={handleClick("1")}>1</CalculatorButton>
        <CalculatorButton onClick={handleClick("2")}>2</CalculatorButton>
        <CalculatorButton onClick={handleClick("3")}>3</CalculatorButton>
        <CalculatorButton onClick={handleClick("+")} variant="primary">
          +
        </CalculatorButton>
        <CalculatorButton onClick={handleClick("0")} className="span2">
          0
        </CalculatorButton>
        <CalculatorButton onClick={handleClick(".")}>.</CalculatorButton>
        <CalculatorButton onClick={calculate} variant="primary">
          =
        </CalculatorButton>
      </StyledButtons>
    </StyledCalculator>
  );
}

export { Calculator };
export default Calculator;
