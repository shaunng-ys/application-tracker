import {
  addApplication,
  updateStatus,
  removeApplication,
} from "./appHelpers.js";

//Arrow functions, template literals, ternaries

// 1)toFahrenheit
const toFahrenheit = (tempC) => tempC * 1.8 + 32;

//console.log(toFahrenheit(0));
//console.log(toFahrenheit(100));

// 2)double
const doubled = (arr) => arr.map((n) => n * 2);

//const arr = [0, 10, 11, 12, 13, 14, 15, 16];
//console.log(doubled(arr));
//console.log(doubled([1, 3, 5, 7, 9]));

// 3)onlyEven
const onlyEven = (array) => array.filter((n) => n % 2 == 0);

//const array = [1, 2, 3, 4, 5, 6];
//console.log(onlyEven(array));
//console.log(onlyEven([1, 3, 5]));

// 4)average
const average = (array) => {
  const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };
  return sumArray(array) / array.length;
};

//const array = [1, 2, 3, 4, 5, 6];
//console.log(average(array));

// 5)fizzBuzz
const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    i % 3 == 0 && i % 5 == 0
      ? console.log(`FizzBuzz`)
      : i % 3 == 0
        ? console.log(`Fizz`)
        : i % 5 == 0
          ? console.log(`Buzz`)
          : console.log(`${i}`);
  }
};

//fizzBuzz(20);

//Spread and rest

function application(
  id,
  company,
  title,
  salaryMin,
  salaryMax,
  skillRequirements,
  status,
) {
  this.id = id;
  this.company = company;
  this.title = title;
  this.salaryMin = salaryMin;
  this.salaryMax = salaryMax;
  this.skillRequirements = skillRequirements;
  this.status = status;
}

const app1 = new application(
  1,
  "TnG Digital",
  "Junior Software Engineer",
  3800,
  5500,
  ["React", "Express", "PostgreSQL"],
  "applied",
);
const app2 = new application(
  2,
  "GX Bank",
  "Junior Software Engineer",
  4000,
  5000,
  ["React", "Express", "PostgreSQL"],
  "applied",
);
const app3 = new application(
  3,
  "Maybank",
  "Junior Software Developer",
  4000,
  6500,
  ["React", "Express", "PostgreSQL"],
  "applied",
);
const app4 = new application(
  4,
  "Jirnexu",
  "Junior Software Engineer",
  3850,
  5000,
  ["React", "Express", "PostgreSQL"],
  "applied",
);

const app5 = new application(
  5,
  "Ryt Bank",
  "Junior Software Engineer",
  3900,
  5750,
  ["React", "Express", "PostgreSQL"],
  "applied",
);

const arrayOfApplications = [app1, app2, app3, app4, app5];

//addApplication();
/*
const addApplications = (appArr, newApp) => {
  const newArr = [...appArr];
  newArr.push(newApp);
  return newArr;
};
*/

const app6 = new application(
  6,
  `MoneyLion`,
  `Software Engineer I`,
  4400,
  5700,
  [`React`, `Express`, `PostgreSQL`],
  `applied`,
);

const appArr1 = addApplication(arrayOfApplications, app6);

// console.log(arrayOfApplications.length);
// console.log(appArr1.length);

// updateStatus();
/*
const updateStatus = (apps, id, newStatus) =>
  apps.map((app) => (app.id === id ? { ...app, status: newStatus } : app));
*/

/*
const updateStatus = (apps, id, newStatus) => {
  const newArr = [...apps];
  let index = newArr.findIndex((obj) => obj.id === id);
  newArr[index].status = newStatus;
  return newArr;
};
*/
/*
const updateStatus = (apps, id, newStatus) => {
  const newArr = apps.map((app) => ({ ...app }));
  let index = newArr.findIndex((app) => app.id === id);
  newArr[index].status = newStatus;
  return newArr;
};
*/

const appArr2 = updateStatus(appArr1, 6, `not applied`);

// console.log(appArr1);
// console.log(appArr2);

// removeApplication();
/*
const removeApplication = (apps, id) =>
  apps.filter((app) => (app.id !== id ? true : false));
*/

const appArr3 = removeApplication(appArr1, 6);

// console.log(appArr1);
// console.log(appArr3);
// console.log(appArr1);
