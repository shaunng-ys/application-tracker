//From task 1.2

//9. Return only the even numbers from an array

function onlyEven(array) {
  let j = 0;
  const arrOfEvens = [];
  for (let i = array.length - 1; j <= i; j++) {
    if (array[j] % 2 == 0) {
      arrOfEvens.push(array[j]);
    }
  }
  return arrOfEvens;
}

//console.log(onlyEven([1, 2, 3, 4, 5, 6]));
//console.log(onlyEven([1, 3, 5]));

//filter version of exercise 9 above
/*
const array = [1, 2, 3, 4, 5, 6];
const array = [0, 10, 11, 12, 13, 14, 15, 16];
const evens = array.filter((num) => {
  if (num % 2 == 0) {
    return true;
  }
});

console.log(evens);
*/

//14. Double every number in an array

function double(array) {
  let j = array.length - 1;
  const arrOfDoubled = [];
  for (let i = 0; i <= j; i++) {
    arrOfDoubled.push(array[i] * 2);
  }
  return arrOfDoubled;
}

//console.log(double([1, 2, 3]));
//console.log(double([]));

//map version of exercise 14 above
const array = [1, 2, 3, 4, 5, 6];
//const array = [0, 10, 11, 12, 13, 14, 15, 16];

console.log(array);

const doubled = array.map((num) => {
  num * 2;
});

console.log(doubled);
