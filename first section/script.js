// code challange 1

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

let comment = `the Mark BMI is ${markBMI}
John BMI is ${johnBMI}
the Mark BMI is higher than John`;
console.log(comment);

// if else condition

const age = 15;

if (age >= 18) {
  console.log("you can learn the driving license");
} else {
  const ageLeft = 18 - age;
  console.log(`you are too young. Wait for another ${ageLeft} years`);
}

// code challange 2

if (markBMI > johnBMI) {
  console.log(`Mark BMI is higher than John`);
} else {
  console.log(`Mark BMI is lower than John`);
}

// 5 falsy value: 0, '', undefined, null, NaN
