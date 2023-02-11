type CalcFn = (a: number, b: number) => number;

const add: CalcFn = (a, b) => a + b;
const subtract: CalcFn = (a, b) => a - b;
const multiply: CalcFn = (a, b) => a * b;
const divide: CalcFn = (a, b) => a / b;

function isOperationString(str: string): boolean {
  return operationsArray.includes(str);
}

function findStackTopString(stack: string[]): string {
  return [...stack].reverse().find(str => !isOperationString(str)) || "0";
}

function findIndexStackTopString(stack: string[]): number {
  const index = [...stack].reverse().findIndex(str => !isOperationString(str));
  if (index === undefined) {
    return -1;
  }
  return stack.length - 1 - index;
}

const operationsArray: string[] = ["/", "*", "-", "+"];

const operationsMap: Record<string, CalcFn> = {
  "/": divide,
  "*": multiply,
  "-": subtract,
  "+": add,
};

export {
  add,
  subtract,
  multiply,
  divide,
  findStackTopString,
  findIndexStackTopString,
  isOperationString,
  operationsArray,
  operationsMap,
};

export type { CalcFn };
