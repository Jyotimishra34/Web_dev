 // OPERATORS
 let a=4;
 let b= 2;

 a= a+1;  //unary operator
 // console.log is used to run the code in console not on browser
console.log(a);
console.log("a = ", a, "& b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);   //4^2 (Exponential)


// comparison operator
 // document.write help to run the code on browser 
document.write("5 == 2 : ", a == b, "<br>" );  //false
document.write("41! = 34 : ", a != b,"<br>");  
document.write("a === b  : ", a === b, "<br>"); // strict version(it will also check the data type)
document.write("a !== b  : ", a !== b, "<br>");


// CONDITIONAL STATEMANT
//IF STATEMENT (1)
let age=18;
if(age>= 18){
    console.log(" You CAN vote");
}

if(age < 18){
    console.log("you CANNOT vote");
}

// (2)
let mode = "dark";
let color;
if(mode === "dark"){
    color = "Black";
}

 if(mode === "light"){
    color = " White";
 } 

 console.log (color);



 // IF-ELSE STATEMENT(1)
 let AGE = 16;
 if(AGE >= 18){
    console.log("you are eligible");
 }
  else{
    console.log("You are NOT eligible");
  }



//(2)
 let MODE = "light";
 let COLOR;

 if(MODE === "DARK"){
    COLOR= " BLACK";
 }
     else{
        COLOR === " WHITE";
     
    }
    console.log(COLOR);



    // TERNARY OPERATOR
    let marks = 60;
  //  result = marks >35 ? "pass" : "fail";
  result = marks >35 ?  console.log("pass" ):  console.log("fail");
  //  console.log(result);



  //Qs1. Get user to input a number using prompt(“Enter a number:”). 
  // Check if the number is a multiple of 5 or not.




