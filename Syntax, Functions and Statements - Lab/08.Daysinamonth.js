function daysInAMonth(month,year){
  'use strict';

  return console.log(new Date(year,month,0).getDate());
  
}
daysInAMonth(1, 2012);