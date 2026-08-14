//1. Fizzbuzz

function fizzBuzz(num) {
  let i = 1;
  while (i < num + 1) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`FizzBuzz`);
    } else if (i % 5 == 0) {
      console.log(`Buzz`);
    } else if (i % 3 == 0) {
      console.log(`Fizz`);
    } else {
      console.log(i);
    }
    i++;
  }
}

//fizzBuzz(20);

//2. Reverse a string
function reverseString(str) {
  let strbackwards = ``;
  for (let i = str.length - 1; i >= 0; i--) {
    strbackwards = strbackwards + str[i];
  }
  return strbackwards;
}

//console.log(reverseString(`hello`));

//3. Sum all numbers in an array
function sumArray(array) {
  let sum = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    sum = sum + array[i];
  }
  return sum;
}

//console.log(sumArray([1, 2, 3, 4]));

//4. Find the largest number in an array
function largest(array) {
  let current = array[0];
  for (let i = array.length - 1; i > 0; i--) {
    if (array[i] > current) {
      current = array[i];
    }
  }
  return current;
}

//console.log(largest([3, 9, 2, 7]));
