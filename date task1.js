// console.log(getDaysInMonth(1, 2012));

// console.log(getDaysInMonth(2, 2012));

// console.log(getDaysInMonth(9, 2012));

// console.log(getDaysInMonth(12, 2012));
// function a(month,year){
    
    
//     console.log (new Date(year,month,0).getDate())

// }
// a(1,2012)
// a(2,2012)
// a(9,12)
// a(12,2012)

function month_name(d){
     return d.toLocaleString("default",{ month : "long"})
}
console.log(month_name(new Date("10/11/2009")))
console.log(month_name(new Date("11/13/2014")))
// let a=new Date("10/11/2009")
// function month_name(d){
//      return a.toLocaleString("default",{ month : "long"})
// }

// console.log(month_name(a))