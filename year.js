
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

const num_year = 2004;


if(isLeapYear(num_year)){
    console.log(`${num_year} is a leap year.`);
}else{
    console.log(`${num_year} is not a leap year.`);
}

