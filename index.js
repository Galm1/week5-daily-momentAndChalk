const moment = require('moment');
const chalk = require('chalk');
let now = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
let doy = moment().format('DDDo');
let sec = moment().diff(moment().hour(00).minute(0).second(0), 'seconds');
// let sec = moment.duration(moment().format('HH:mm:ss')).asSeconds();
let dayls = '';
let leapYear = '';

console.log(chalk`It is {blue ${now}}.`);

console.log(chalk`It is the {magenta ${doy}} day of the year.`);

console.log(chalk`It is {cyan ${sec}} seconds into the day.`);

function dls() {
  if (moment().isDST() === false) {
    dayls = 'is not';
  }
  dayls = 'is';
}
dls();

console.log(chalk`It {green ${dayls}} during Daylight Savings Time.`);

function ly() {
  if (moment().isLeapYear() === false) {
    leapYear = 'is not';
  }
  leapYear = 'is';
}
ly();

console.log(chalk`It {red ${leapYear}} a leap year.`);
