function application(
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
  this.skillRequirements = skillRequirements;
  this.status = status;
}

const app1 = new application(
  "TnG Digital",
  "Junior Software Engineer",
  3800,
  5500,
  ["React", "Express", "PostgreSQL"],
  "applied",
);
const app2 = new application(
  "GX Bank",
  "Junior Software Engineer",
  4000,
  5000,
  ["React", "Express", "PostgreSQL"],
  "applied",
);
const app3 = new application(
  "Maybank",
  "Junior Software Developer",
  4000,
  6500,
  ["React", "Express", "PostgreSQL"],
  "applied",
);
const app4 = new application(
  "Jirnexu",
  "Junior Software Engineer",
  3850,
  5000,
  ["React", "Express", "PostgreSQL"],
  "applied",
);

const app5 = new application(
  "Ryt Bank",
  "Junior Software Engineer",
  3900,
  5750,
  ["React", "Express", "PostgreSQL"],
  "applied",
);

//console.log(app5.salaryMax);

const arrayOfApplications = [app1, app2, app3, app4, app5];

const app6 = new application(
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

console.log(arrayOfApplications);

function findApplication(companyName) {
  function isCompany(n) {
    if (n.company == companyName) return true;
  }
  let indexOfApp = arrayOfApplications.findIndex(isCompany);
  if (indexOfApp != -1) {
    console.log(arrayOfApplications[indexOfApp]);
    return arrayOfApplications[indexOfApp];
  }
}

findApplication("GX Bank");

function updateAppStatus(application, newStatus) {
  application.status = newStatus;
}

//updateAppStatus(app6, "Interview 1");
//console.log(arrayOfApplications);

function removeApplication(applicationName) {
  //console.log(applicationName);
  function isApp(n) {
    if (n == applicationName) {
      return true;
    }
  }
  let indexOfApp = arrayOfApplications.findIndex(isApp);
  //console.log(indexOfApp);
  arrayOfApplications.splice(indexOfApp, 1);
}

removeApplication(app1);

//console.log(arrayOfApplications);

const a = arrayOfApplications[0];
const b = a;
b.company = "Changed";
console.log(a.company); // predict: ?
//"Changed"

const c = { ...a };
c.company = "Different";
console.log(a.company); // predict: ?
//"Changed"
