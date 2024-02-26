//ConstraintParam
manadatory = () => { throw new Error('Thiếu tham số !'); };

sample = (param1 = manadatory()) => param1

try {
    console.log(sample('Hello')); 
    console.log(sample()); 
  } catch (error) {
    console.error(error.message); 
  }
// DestructuringAssignment
  import { action, server } from 'lib';

  const { from, errors, entity, controller, component } = this.props;

  // double
console.log(~~6.9 === 6);

// Findinarrays

const employees = [
  { name: 'Emp A', age: 25 },
  { name: 'Emp B', age: 28 },
  { name: 'Emp C', age: 35 }
];


const name = 'Emp A';
const emp = employees.find(item => item.name === name);

console.log(emp);

// Forloop
const sampleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let item of sampleArr) {
  console.log(item);
}
// Forloopwithdecimalbase
for(let i = 0; i < 1e5; i++){
  console.log(i);
}
// function
const sayHello = name => console.log('Hello', name);
sayHello('Tom');

setTimeout(() => console.log('Loaded'), 2000);

const List = [1, 2, 3];
List.forEach(item => console.log(item));

const getValue = ratio => ratio * 6.9;
const result = getValue(5); 
console.log(result); 


const getValue1 = (a, b = 3, c = 4) => (a * b + c);
const result1 = getValue1(2);
console.log(result1); 
// IfComparison
const isTurnOn = true;

if (isTurnOn) {
  console.log("Giá trị đúng.");
} else {
  console.log("Giá trị sai.");
}
// Object[key]
function validate (fullName) {
  if(! fullName . firstName)
      return false;
  if(! fullName. lastName )
      return false;
  return true;
  }
  console . log (validate ({firstName: 'Duy',lastName: 'Buffet'})); // true
  // Objectproperty
  const x = 1, y = 2;
  const obj = {x, y};

  console.log(obj);
// ShorthandEvaluated
  const variable2 = Variable || "";
  console.log(variable2);
  // SpeadOperator
  const odd = [1, 3, 5];
const nums = [2, 4, 6, ...odd];
console.log(nums);

const arr = [1, 2, 3, 4, 5,];
const arr2 = [...arr];
console.log(arr2);

const oddd = [1, 3, 5];
const numss = [2, ...oddd, 4, 6];
console.log(numss);
// tempCodeRunnerFile
manadatory = () => { throw new Error('Thiếu tham số !'); };

sample = (param1 = manadatory()) => param1
// Templatelist
const first = "Hao";
const last = "Tran";
const welcome = `You have logged in as ${first} ${last}.`;
console.log(welcome); 



const lorem = `Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse.`;
console.log(lorem);

// toantu3ngoi
const x = 100;
const result = (x < 1000) ? "nhỏ hơn 1000" : "lớn hơn hoặc bằng 1000";
console.log(result);
// Variabledeclaration
let x, y, z = 3;
console.log("Giá trị của x là: " + x);
console.log("Giá trị của y là: " + y);
console.log("Giá trị của z là: " + z);

