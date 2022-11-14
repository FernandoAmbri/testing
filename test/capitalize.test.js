import { capitalizeString } from "../code/capitalize";

//capitalized test

it("capitalized string 1", () => {
  expect(capitalizeString("fernando AMBROSIO borbonio")).toBe(
    "Fernando Ambrosio Borbonio"
  );
});

it("capitalized string 2", () => {
  expect(capitalizeString("FERNANDO")).toBe("Fernando");
});

it("capitalized string 3", () => {
  expect(capitalizeString("FeRnANdO")).toBe("Fernando");
});

it("capitalized string 4", () => {
  expect(capitalizeString("")).toBe("");
});

/*
  If you want to check the value of an object, use toEqual or toStrictEqual 
  instead:

  expect(data).toEqual({one: 1, two: 2});

  toEqual recursively checks every field of an object or array.

  Using toStrictEqual is preferred over using toEqual. toEqual simply ignores 
  undefined values, whereas toStrictEqual takes them into account.

  test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

  You can check strings against regular expressions with toMatch:

  expect('Christoph').toMatch(/stop/);

  You can check if an array or iterable contains a particular 
  item using toContain:

  expect(shoppingList).toContain('milk');

  If you want to test whether a particular function throws 
  an error when it's called, use toThrow.

  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/);

*/
