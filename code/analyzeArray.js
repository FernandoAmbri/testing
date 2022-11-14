export function analyzeArray(array) {
  const size = array.length;
  let newArray = array.slice();
  newArray = newArray.sort((a, b) => a - b);

  let mean = newArray.reduce((acc, cur) => (acc += cur), 0) / size;
  mean = mean.toFixed(2);

  return {
    average: Number(mean),
    min: newArray[0],
    max: newArray[size - 1],
    length: size,
  };
}
