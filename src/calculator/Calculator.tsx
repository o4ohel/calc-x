import { ChangeEvent, useEffect, useState } from "react";
import {
  StyledButtons,
  StyledCalculator,
  StyledInput,
} from "./Calculator.styled";
import { CalculatorButton } from "./components";
import { shouldCalculate, toggleSign } from "./helpers";
import { operationsMap } from "./constants";

type ActiveStack = "operand" | "operation";

function Calculator() {
  const [operandStack, setOperandStack] = useState<string[]>([]);
  const [operationStack, setOperationStack] = useState<string[]>([]);

  const [activeStack, setActiveStack] = useState<ActiveStack>("operand");

  const [nextOperation, setNextOperation] = useState("");

  /* This useEffect is just for debugging */
  // useEffect(() => {
  //   console.log(
  //     "nextOperation: %o, activeStack: %o\noperandStack: %o\noperationStack: %o",
  //     nextOperation,
  //     activeStack,
  //     operandStack,
  //     operationStack
  //   );
  // }, [nextOperation, operandStack, operationStack]);

  useEffect(() => {
    if (!nextOperation) {
      return;
    }
    const currentOperation = operationStack[operationStack.length - 1];
    if (!currentOperation || operandStack.length < 2) {
      return;
    }
    if (
      shouldCalculate(
        operationsMap[currentOperation].order,
        operationsMap[nextOperation].order
      )
    ) {
      calculate();
    }
  }, [nextOperation]);

  const calculate = () => {
    const tempOperandStack = [...operandStack];
    const tempOperationStack = [...operationStack];
    while (tempOperandStack.length > 1) {
      const curOperationStr = tempOperationStack.pop();
      const arg2 = tempOperandStack.pop();
      const arg1 = tempOperandStack.pop();
      if (curOperationStr && arg1 && arg2) {
        const curFn = operationsMap[curOperationStr].fn;
        const result = curFn(parseFloat(arg1), parseFloat(arg2));
        console.log("result: %o", result);
        tempOperandStack.push(Number(result.toPrecision(8)).toString());
      }
    }
    setOperandStack(tempOperandStack);
    setOperationStack([nextOperation]);
    setNextOperation("");
  };

  const handleEqual = () => {
    calculate();
  };

  const handleClickNumber = (newValue: string) => () => {
    if (!operandStack.length || activeStack === "operation") {
      operandStack.push(newValue);
    } else {
      const top = operandStack[operandStack.length - 1];
      operandStack[operandStack.length - 1] =
        top + (top.includes(".") && newValue.includes(".") ? "" : newValue);
    }
    setOperandStack([...operandStack]);
    if (nextOperation) {
      operationStack.push(nextOperation);
      setOperationStack([...operationStack]);
      setNextOperation("");
    }
    setActiveStack("operand");
  };

  const handleClickOperation = (newValue: string) => () => {
    setNextOperation(newValue);
    setActiveStack("operation");
  };

  const handleToggleSign = () => {
    if (!operandStack.length) {
      return;
    }
    const top = operandStack[operandStack.length - 1];
    operandStack[operandStack.length - 1] = toggleSign(top);
    setOperandStack([...operandStack]);
  };

  const handlePercent = () => {
    if (!operandStack.length) {
      return;
    }
    const top = operandStack[operandStack.length - 1];
    operandStack[operandStack.length - 1] = (parseFloat(top) / 100).toString();
    setOperandStack([...operandStack]);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value;
    console.log("TODO: implement. handleInputChange; value: %o", value);
  };

  const clearAll = () => {
    setOperandStack([]);
    setOperationStack([]);
    setNextOperation("");
    setActiveStack("operand");
  };

  return (
    <StyledCalculator>
      <StyledInput
        value={operandStack[operandStack.length - 1] || "0"}
        onChange={handleInputChange}
      />
      <StyledButtons>
        <CalculatorButton onClick={clearAll} variant="secondary">
          AC
        </CalculatorButton>
        <CalculatorButton onClick={handleToggleSign} variant="secondary">
          +/-
        </CalculatorButton>
        <CalculatorButton onClick={handlePercent} variant="secondary">
          %
        </CalculatorButton>
        <CalculatorButton onClick={handleClickOperation("/")} variant="primary">
          ÷
        </CalculatorButton>
        <CalculatorButton onClick={handleClickNumber("7")}>7</CalculatorButton>
        <CalculatorButton onClick={handleClickNumber("8")}>8</CalculatorButton>
        <CalculatorButton onClick={handleClickNumber("9")}>9</CalculatorButton>
        <CalculatorButton onClick={handleClickOperation("*")} variant="primary">
          x
        </CalculatorButton>
        <CalculatorButton onClick={handleClickNumber("4")}>4</CalculatorButton>
        <CalculatorButton onClick={handleClickNumber("5")}>5</CalculatorButton>
        <CalculatorButton onClick={handleClickNumber("6")}>6</CalculatorButton>
        <CalculatorButton onClick={handleClickOperation("-")} variant="primary">
          -
        </CalculatorButton>
        <CalculatorButton onClick={handleClickNumber("1")}>1</CalculatorButton>
        <CalculatorButton onClick={handleClickNumber("2")}>2</CalculatorButton>
        <CalculatorButton onClick={handleClickNumber("3")}>3</CalculatorButton>
        <CalculatorButton onClick={handleClickOperation("+")} variant="primary">
          +
        </CalculatorButton>
        <CalculatorButton onClick={handleClickNumber("0")} className="span2">
          0
        </CalculatorButton>
        <CalculatorButton onClick={handleClickNumber(".")}>.</CalculatorButton>
        <CalculatorButton onClick={handleEqual} variant="primary">
          =
        </CalculatorButton>
      </StyledButtons>
    </StyledCalculator>
  );
}

export { Calculator };
export default Calculator;
