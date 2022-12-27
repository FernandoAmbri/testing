//const reverseString = (string) => string.split("").reverse().join("");

function reverseString(string) {
  return string.split("").reduce((acc, cur) => (acc = cur + acc), "");
}

export { reverseString };
