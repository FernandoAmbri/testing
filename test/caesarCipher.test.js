import { caesarEncription } from "../code/caesarCipher";

it("Caesar Cipher test 1", () => {
  expect(caesarEncription("Anita lava la tina", 13)).toEqual(
    "navgn ynin yn gvan"
  );
});

it("Caesar Cipher test 2", () => {
  expect(caesarEncription("Anita lava la tina", 5)).toEqual(
    "fsnyf qfaf qf ynsf"
  );
});

it("Caesar Cipher test 3", () => {
  expect(caesarEncription("La escuela es importante!", 9)).toEqual(
    "uj nbldnuj nb rvyxacjwcn!"
  );
});
