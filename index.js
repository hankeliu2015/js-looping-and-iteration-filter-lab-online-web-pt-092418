// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
  let foundDrivers = [];
  for (const driver of drivers) {
    if (driver === name || driver.toLowerCase() === name.toLowerCase()) {
       foundDrivers.push(driver);
    }
  }
  return foundDrivers
}

function fuzzyMatch(drivers, provideLetter) {
  let matchDrivers = [];
  let matchLength = provideLetter.length
  //debugger

  for (const driver of drivers) {
    if (driver.slice(0,matchLength).toLowerCase() === provideLetter.toLowerCase())
    matchDrivers.push(driver)
  }
  return matchDrivers;
}

function matchName(drivers, string) {
  matchNames = [];
  for (const driver of drivers) {
    for (const key in driver) {
      if (key === "name") {
        if (driver[key] === string) {
          matchNames.push(driver);
        }
     }
    }
  }
  return matchNames
}
