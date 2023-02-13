import { add, divide, multiply, subtract } from "./helpers";
import type { CalcFn } from "./helpers";

enum OperationOrder {
  Subtract = 1,
  Add = 1,
  Divide = 2,
  Multiply = 2,
}

const operationsMap: Record<string, { fn: CalcFn; order: OperationOrder }> = {
  "/": { fn: divide, order: OperationOrder.Divide },
  "*": { fn: multiply, order: OperationOrder.Multiply },
  "-": { fn: subtract, order: OperationOrder.Subtract },
  "+": { fn: add, order: OperationOrder.Add },
};

export { OperationOrder, operationsMap };
