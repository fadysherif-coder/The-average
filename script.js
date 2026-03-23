let grades = [];
let count = prompt("Enter how many grades you want to input:");
count = parseInt(count);
for (let i = 0; i < count; i++) {
  let grade = prompt("Enter grade " + (i + 1) + ":");
  grades.push(parseInt(grade));    
}
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}


let average = sum / grades.length;
console.log("The average is: " + average);


if (average >= 8.5) {
  console.log("Excellent 👏");
} else if (average >= 7) {
  console.log("Very Good 👍");
} else if (average >= 6) {
  console.log("pass 🙂");
}  else {
  console.log("Fail ❌");
}
