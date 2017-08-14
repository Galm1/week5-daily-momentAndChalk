let moment = require('moment');
let now = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
let doy = moment().format('DDDo');
let sec = moment().diff(moment().hour(00).minute(0).second(0), 'seconds');
// let sec = moment.duration(moment().format('HH:mm:ss')).asSeconds();
let dayls = '';
let leapYear = '';

console.log(`It is ${now}.`);

console.log(`It is the ${doy} day of the year.`);

console.log(`It is ${sec} seconds into the day.`);

function dls() {
  if (moment().isDST() === false) {
    dayls = 'is not';
  }
  dayls = 'is';
}
dls();

console.log(`It ${dayls} during Daylight Savings Time.`);

function ly() {
  if (moment().isLeapYear() === false) {
    leapYear = 'is not';
  }
  leapYear = 'is';
}
ly();

console.log(`It ${leapYear} a leap year.`);
