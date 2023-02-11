import type { CalcFn } from "./helpers";
import { add, divide, multiply, subtract } from "./helpers";

const operationsArray: string[] = ["/", "*", "-", "+"];

const operationsMap: Record<string, CalcFn> = {
  "/": divide,
  "*": multiply,
  "-": subtract,
  "+": add,
};

export { operationsArray, operationsMap };
