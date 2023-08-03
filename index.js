// This is a comment. Use // for commenting
/* This is a multiline 
comment */
var myName = "Haris Rehman"; //one way to declare a variable
console.log(myName); //for out
myName = 25.44;
console.log(myName);
const constantvar = 52; // can never be changed
//arrays
var testarr = [];
testarr.push("Harsi", 432.23, -34);
console.log(testarr);
testarr.pop();   //remove last element
console.log(testarr);
testarr.shift(); //remove first element
console.log(testarr);
testarr.unshift([2,5,4,-2.53]); //adds elements to start of array
console.log(testarr);
console.log("The resulting array is: ", JSON.stringify(testarr));
//Functions
function numcheck(num1, num2){
    if (num1>num2 && num1 != num2){
        console.log(num1, "is greater");
        return num1;
    }
    else if (num2>num1){
        console.log(num2, "is greater");
        return num2;
    }
    else{
        console.log("Same")
        return -1;
    }
}
var val = numcheck(45,67);
console.log(val);
val = numcheck(21,56);
console.log(val);
val = numcheck(33,33)
console.log(val);
var exempbool = false;
console.log(exempbool);
exempbool = true;
console.log(exempbool)
var char = '';
switch(char){
    case 'A':
        console.log("A");
        break;
    case 'B':
        console.log("B");
        break;
    case 'C':
        console.log("C");
        break;
    default:
        console.log("Fail");
        break;
}
//Objects. LIKE DICTIONARIES
var studentdata ={
    "name": "haris",
    "age": 19,
    "Single": true,
};
var finalstr = "The Student " + studentdata.name + " of age " + studentdata.age + " has single status = " + studentdata.Single;
console.log(finalstr);
studentdata.height = 6.2;
console.log(studentdata);
delete studentdata.height;
function checkobj(prop){
    if (studentdata.hasOwnProperty(prop)){
        return studentdata[prop];
    }
    else{
        return "Not Found";
    }
};
console.log(checkobj("name"));
console.log(checkobj("height"));
var copiedobj = JSON.parse(JSON.stringify(studentdata)); 
// creates copy of object
var resultarr = [];
for (var x = 0; x <20; x++){
    var randomnum = Math.floor(Math.random()*100);
    resultarr[x] = randomnum;
}
console.log(JSON.stringify(resultarr));
console.log(typeof(parseInt("11010101", 2)));
var magic = (argumentscanbeaddedhere) => new Date(); // is the same as:
console.log(magic());
var magic = function(){
    return new Date();
} // which is the same as
function magic(){
    return new Date();
}
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a+b, 0);
    }
})();

console.log(sum(1, 3, 5));
let arr1 = [1, 4, 5];
let arr2;
arr2 = [...arr1]; //spread operator
arr1[1] = true;
console.log(arr1);
console.log(arr2);
const teststr = `My name is ${studentdata.name}
and I can play football.`;
console.log(teststr);
class car {
    constructor(nameofcar, size){
        this.nameofcar = nameofcar;
        this.size = size;
    }
    get name(){
        return this.name;
    }
    set name(Newname){
        this.nameofcar = Newname;
    }
}

var Car1 = new car("Ferarri", 1500);