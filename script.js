
let grades = [80, 65, 90, 70, 50];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}
let average = sum / grades.length;
console.log("The average is: " + average);

if (average >= 85) {
  console.log("Excellent 👏");
} else if (average >= 70) {
  console.log("Very Good 👍");
} else if (average >= 50) {
  console.log("Pass 🙂");
} else {
  console.log("Fail ❌");
}