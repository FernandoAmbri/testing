import { analyzeArray } from "../code/analyzeArray";

it("Analyze Array test 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

it("Analyze Array test 2", () => {
  expect(analyzeArray([2, 3, 9, 5])).toEqual({
    average: 4.75,
    min: 2,
    max: 9,
    length: 4,
  });
});

it("Analyze Array test 3", () => {
  expect(analyzeArray([-2, -3, 9, 5])).toEqual({
    average: 2.25,
    min: -3,
    max: 9,
    length: 4,
  });
});
