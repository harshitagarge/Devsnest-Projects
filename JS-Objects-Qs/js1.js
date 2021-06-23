// 1. Write a JavaScript program to list the properties of a JavaScript object.

l_prop = (input) => {
  arr = [];
  for (i in input) arr.push(i);
  return arr.join(", ");
};

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log(l_prop(student));
