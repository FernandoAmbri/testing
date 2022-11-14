import { reverseString } from "../code/reverseString";

it("reverse string test 1", () => {
  expect(reverseString("fernando")).toBe("odnanref");
});

it("reverse string test 2", () => {
  expect(reverseString("Communication is very important")).toBe(
    "tnatropmi yrev si noitacinummoC"
  );
});
