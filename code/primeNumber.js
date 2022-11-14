const esPrimo = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

(() => {
  let arr = new Array(10).fill(1).map((val, i) => val + i);
  let arrFinal = [];
  arr.forEach((num) => {
    if (esPrimo(num) && num > 1) {
      arrFinal.push(num);
    }
  });
  console.log(arrFinal);
})();
