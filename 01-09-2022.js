let array = [1, "2", { A: "C", B: [1, 2] }];

array.forEach((value, index) => {
  if (typeof value !== "object") {
    console.log(`El elemento ${index}: ${value}`);
  } else {
    for (const item of Object.keys(value)) {
      if (Array.isArray(value[item])) {
        let arr = value[item];
        arr.forEach((val, i) =>
          console.log(`El elemento ${item}[${i}]: ${val}`)
        );
      } else {
        console.log(`El elemento ${item}: ${value[item]}`);
      }
    }
  }
});

/* let usuarios = [
  { nombre: "Juan", edad: 28, cumple: false },
  { nombre: "Pedro", edad: 25, cumple: false },
  { nombre: "Luis", edad: 29, cumple: false },
];

let promedio =
  usuarios.reduce((acc, cur) => (acc += cur.edad), 0) / usuarios.length;

let newArr = usuarios.map((val) => {
  if (val.edad > Math.round(promedio)) {
    val.cumple = true;
  }
  return val;
});

console.log(newArr); */
