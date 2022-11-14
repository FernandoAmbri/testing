function capitalizeString(string) {
  let newString = string.toLowerCase();
  let stringMap = newString.split(" ").map((word) => {
    return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;
  });
  if (stringMap) return stringMap.join(" ");
  return `${newString.slice(0, 1).toUpperCase()}${newString.slice(1)}`;
}

export { capitalizeString };
