console.log("var let const explanation");
var a = 45;
let b = 46;
{
  var a = 78;
  let b = 89;
  console.log("a", a);
  console.log("b", b);
}
console.log("Outside the block");
console.log("a", a);
console.log("b", b);
// in above if we use var then it will remain same if we applied it outside the block but if we use let then it will change the value of a inside the block and outside the block.
var a = 36;
console.log(a);
//here we can redeclare var but we cannot redeclare let. we can assignt a new value to let but we cannot redeclare it. because we again n again redeclare it memory will be wasted so let help and know you the variable is declared already memory is allocated
const author = "mrunal";
console.log(author);
//here we cannot redeclare const also we cannot change the value of const.
//author ="priti"
//it will throw an error because we cannot change const.
//use more const for variable and let less but not use var
