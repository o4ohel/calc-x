import { OperationOrder } from "./constants";

type CalcFn = (a: number, b: number) => number;

const add: CalcFn = (a, b) => a + b;
const subtract: CalcFn = (a, b) => a - b;
const multiply: CalcFn = (a, b) => a * b;
const divide: CalcFn = (a, b) => a / b;

function shouldCalculate(
  prevOperation: OperationOrder,
  curOperation: OperationOrder
): boolean {
  return prevOperation >= curOperation;
}

function toggleSign(str: string): string {
  return (parseFloat(str) * -1).toString();
}

export { add, subtract, multiply, divide, shouldCalculate, toggleSign };

export type { CalcFn };
