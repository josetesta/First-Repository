//index.js
//   var number = 5;
//   let name = "Shawn";

//   number = 12;
//   name = "Pluralsight ";

// document. writeln(name + number);
// alert ("Hello World");

let hasJob = true;
if (hasJob) {
// I have a job
showMessage("Thanks for viditing, I'm currently employed");   
}
else {
// I need a job
showMessage("Please look around, I'm currently looking for a position");
}

let today = new Date();
let dayOfWeek = today.getDay(08/01/2021);
if (dayOfWeek === 0 || dayOfWeek === 6) {
showMessage("Since it is the weekend, please be patient with my returning your email");
}

function showMessage(message) {
  document.writeln("<p>" + message + "</p>"); 
  document.writeln("<hr/>");
 } 