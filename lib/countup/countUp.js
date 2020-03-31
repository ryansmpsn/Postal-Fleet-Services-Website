const milesToDrive = 103000000;

var countUp = setInterval(function() {
  let today = new Date();
  let thisYear = new Date(new Date().getFullYear(), 0, 1);
  let secondsThisYear = (today - thisYear) / 1000;
  let daysThisYear = days_of_a_year(thisYear.getFullYear());

  function days_of_a_year(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  }

  let milesDriven =
    (milesToDrive / daysThisYear / 24 / 60 / 60) * secondsThisYear;

  document.getElementById("counter").innerHTML = Math.trunc(milesDriven)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}, 1);
