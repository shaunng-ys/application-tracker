function createApplication(
  company,
  title,
  salaryMin,
  salaryMax,
  skillRequirements,
  status,
) {
  this.company = company;
  this.title = title;
  this.salaryMin = salaryMin;
  this.salaryMax = salaryMax;
  this.skillRequirments = skillRequirements;
  this.status = status;
}

const app1 = new createApplication(
  "TnG Digital",
  "Junior Software Engineer",
  3800,
  5500,
  ["React", "Express", "PostgreSQL"],
  "applied",
);
const app2 = new createApplication(
  "GX Bank",
  "Junior Software Engineer",
  4000,
  5000,
  ["React", "Express", "PostgreSQL"],
  "applied",
);
const app3 = new createApplication(
  "Maybank",
  "Junior Software Developer",
  4000,
  6500,
  ["React", "Express", "PostgreSQL"],
  "applied",
);
const app4 = new createApplication(
  "Jirnexu",
  "Junior Software Engineer",
  3850,
  5000,
  ["React", "Express", "PostgreSQL"],
  "applied",
);

const app5 = new createApplication(
  "Ryt Bank",
  "Junior Software Engineer",
  3900,
  5750,
  ["React", "Express", "PostgreSQL"],
  "applied",
);

//console.log(app5.salaryMax);

const arrayOfApplications = [app1, app2, app3, app4, app5];

const app6 = new createApplication(
  "Shopee",
  "Junior Web Dev",
  3600,
  4400,
  ["React", "Express", "PostgreSQL"],
  "applied",
);

function addApplication(targetArray, application) {
  targetArray.push(application);
}

addApplication(arrayOfApplications, app6);

//console.log(arrayOfApplications);

function updateAppStatus(application, newStatus) {
  application.status = newStatus;
}

//updateAppStatus(app6, "Interview 1");
//console.log(arrayOfApplications);

function removeApplication(applicationName) {
  console.log(applicationName);
  function isApp(n) {
    if (n == applicationName) {
      return true;
    }
  }
  let indexOfApp = arrayOfApplications.findIndex(isApp);
  console.log(indexOfApp);
  arrayOfApplications.splice(indexOfApp, 1);
}

removeApplication(app1);

console.log(arrayOfApplications);
