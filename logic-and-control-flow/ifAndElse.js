const d = new Date(3, 15, 2023, 9, 30, 30)
const hours = d.getHours()
if (hours < 12) {
    console.log("Good Morning")
} else if (hours < 18){
    console.log("Good afternoon")
} 
else {
    console.log("Good night")
}















//const d2 = new Date("March 15, 2023, 9:30")
//Wed Mar 15 2023 09:30:00 GMT-0700 (Pacific Daylight Time)
// console.log(d2)
// console.log(d2.toString())
//Wed Mar 15 2023 09:29:21 GMT-0700 (Pacific Daylight Time)

//console.log(d.getFullYear())
//2023

//console.log(d.getDate())
//15 (March 15th)