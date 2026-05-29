/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings 
like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. 
We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns 
a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8);

  resultDay = friendDate(day);
  resultMonth = friendMonth(month);

  return `${resultMonth} ${resultDay}, ${year}`;
};

function friendDate(day) {
  const remainderDays = ["0", "4", "5", "6", "7", "8", "9"];
  let finalDay = "";

  if (day[1] === "1" && day[0] === "0") {
    finalDay = "1st";
  } else if (day[1] === "1" && day[0] === "1") {
    finalDay = "11th";
  } else if (day[1] === "1") {
    finalDay = day[0] + "1st";
  }

  if (day[1] === "2" && day[0] === "0") {
    finalDay = "2nd";
  } else if (day[1] === "2" && day[0] === "1") {
    finalDay = "12th";
  } else if (day[1] === "2") {
    finalDay = "22nd";
  }

  if (day[1] === "3" && day[0] === "0") {
    finalDay = "3rd";
  } else if (day[1] === "3" && day[0] === "1") {
    finalDay = "13th";
  } else if (day[1] === "3") {
    finalDay = "23rd";
  }

  if (remainderDays.includes(day[1])) {
    finalDay = day + "th";
  }

  return finalDay;
}

function friendMonth(month) {
  let finalMonth = "";

  switch (month) {
    case "01":
      finalMonth = "January";
      break;
    case "02":
      finalMonth = "February";
      break;
    case "03":
      finalMonth = "March";
      break;
    case "04":
      finalMonth = "April";
      break;
    case "05":
      finalMonth = "May";
      break;
    case "06":
      finalMonth = "June";
      break;
    case "07":
      finalMonth = "July";
      break;
    case "08":
      finalMonth = "August";
      break;
    case "09":
      finalMonth = "September";
      break;
    case "10":
      finalMonth = "October";
      break;
    case "11":
      finalMonth = "November";
      break;
    case "12":
      finalMonth = "December";
      break;
  }
  return finalMonth;
}

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
