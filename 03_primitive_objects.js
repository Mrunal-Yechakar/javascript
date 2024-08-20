// there are 7 types of primitives data types in javascript and Object is non primitive data type.
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g;
console.log(a, b, c, d, e, f, g);
console.log(typeof c);

// Non Primitive Data Type - Objects in Js
const item = {
  Mrunal: true,
  Janhavi: false,
  Jyoti: 67,
  Mansi: undefined,
};
console.log(item["Mrunal"]);
