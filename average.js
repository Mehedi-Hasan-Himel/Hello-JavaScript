// 75.25, 65, 80, 35.45, 99.50
// Mathematics, Biology, Chemistry, Physics, and Bangla.

var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglamarks = 99.5;

var totalMarks =
  mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglamarks;

var averageMarks = totalMarks / 5;

var averageToDecimal = averageMarks.toFixed(2);

console.log(totalMarks);
console.log(averageToDecimal);
