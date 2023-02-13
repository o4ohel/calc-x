import { OperationOrder } from "./constants";
import { shouldCalculate } from "./helpers";

describe("Helpers", () => {
  describe("shouldCalculate", () => {
    it("should calculate when addition or subtraction is followed by addition or subtraction", () => {
      expect(shouldCalculate(OperationOrder.Add, OperationOrder.Add)).toBe(
        true
      );
      expect(shouldCalculate(OperationOrder.Add, OperationOrder.Subtract)).toBe(
        true
      );
      expect(shouldCalculate(OperationOrder.Subtract, OperationOrder.Add)).toBe(
        true
      );
      expect(
        shouldCalculate(OperationOrder.Subtract, OperationOrder.Subtract)
      ).toBe(true);
    });

    it("should calculate when multiplication or division is followed by addition or subtraction", () => {
      expect(shouldCalculate(OperationOrder.Multiply, OperationOrder.Add)).toBe(
        true
      );
      expect(
        shouldCalculate(OperationOrder.Multiply, OperationOrder.Subtract)
      ).toBe(true);
      expect(shouldCalculate(OperationOrder.Divide, OperationOrder.Add)).toBe(
        true
      );
      expect(
        shouldCalculate(OperationOrder.Divide, OperationOrder.Subtract)
      ).toBe(true);
    });

    it("should not calculate when addition or subtraction is followed by division or multiplication", () => {
      expect(shouldCalculate(OperationOrder.Add, OperationOrder.Divide)).toBe(
        false
      );
      expect(shouldCalculate(OperationOrder.Add, OperationOrder.Multiply)).toBe(
        false
      );
      expect(
        shouldCalculate(OperationOrder.Subtract, OperationOrder.Divide)
      ).toBe(false);
      expect(
        shouldCalculate(OperationOrder.Subtract, OperationOrder.Multiply)
      ).toBe(false);
    });
  });
});
