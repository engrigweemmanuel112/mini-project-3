
//1. variables declared with var, Let, and Const

let name = "Francis";//let variable
 console.log(name);

 var number = 2567; //let variable
 console.log(number);

 const myConst = "union"; //const variable

 const ourConst = [1,2,3,4,5]; //const variable
 

 //2. named function
function  bankFunction(){
 console.log("Emmy keep it up- it will pay soon!");
} 
  bankFunction();

//3. unamed Function
let anonymousFunction = function(){
  console.log("Building my future- it pays!!!");
}
anonymousFunction();

function buildFunction(){
  console.log("let your discipline carry you through not your motivation !!")
};
buildFunction();


//4.  Built-in function (example: parseInt)
let numberString = "123";
let parsedNumber = parseInt(numberString);
console.log("Parsed number using parseInt:", parsedNumber);


//5. IF ELSE STATEMENT

let condition = true;
if (condition){
  console.log("condition is true");
} else{
  console.log("condition is false.");
};

let temperature = 25;
if (temperature >=25){
  console.log("It is a hot wealther!!");
} else {
  console.log("its frezzing today!!");
};


//6. IF,ELSE, ELSE IF STATEMENT

let today = "monday";
if(["monday", "tuesday", "wednesday","thursday", "friday"].includes(today)){
 console.log("it's a weekday!");
} else if (today == "saturday"){
  console.log("Happy weekend!");
} else {
  console.log("Day of the Lord!");
};


//Another example
let thisMonth = "october";
if (["january", "february", "march"].includes(thisMonth)){
  console.log("HMM!!We are in the 1st quarter of the year");
} else if (["april", "may", "june", "july"].includes(thisMonth)){
  console.log("OK!!! we are in the 2nd quarter of the year!!");
} else if (["august", "september", "october", "november", "december"].includes(thisMonth)){
  console.log("wahoo!!! - Hurray!!!! nearly Christmas agin");
} else {
  console.log("SORRY!!! You are not on planet Earth");
};