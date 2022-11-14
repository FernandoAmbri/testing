import { calculator } from "../code/calculator";

it("calculator test 1", () => {
  expect(calculator.add(5, 4)).toBe(9);
});

it("calculator test 1", () => {
  expect(calculator.substract(5, 4)).toBe(1);
});

it("calculator test 1", () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});

it("calculator test 1", () => {
  expect(calculator.divide(1, 4)).toBeCloseTo(0.25);
});
