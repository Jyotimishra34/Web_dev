let a = 30,
    b = 50;
[a, b] = [b, a]

a = 45;
b = 35;
a = a - b;
b = a + b;
a = b - a;

console.log(a, b);


// document.write("<br>");
/* Node.js program is throwing a ReferenceError: document is not defined. 
This happens because document.write() is a function available in browser-based JavaScript (DOM manipulation)
 but not in Node.js (which runs JavaScript on the server side and does not have access to the document object).


 document.write() only works in a browser.
Use console.log() for Node.js to print output to the terminal.

*/

let month = 5;

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;


    case 5:
        console.log("May");
        break;


    case 6:
        console.log("June");
        break;


    case 7:
        console.log("July");
        break;


    case 8:
        console.log("August");
        break;


    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
    default:

    console.log("Enter the valid month");


}