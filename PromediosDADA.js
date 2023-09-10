const arreglo = [12, 24, 54, 23, 56, 78, 86];
let promedio = 0;
let suma = 0;

function calcularPromedio(arr) {
  if (arr.length === 0) {
    console.log("no hay elementos en el arreglo")
  }

  for (let index = 0; index < arr.length; index++) {
    suma += arr[index];
  }

  promedio = suma / arr.length;
  return promedio;
}

calcularPromedio(arreglo);
console.log("El promedio es:", promedio);