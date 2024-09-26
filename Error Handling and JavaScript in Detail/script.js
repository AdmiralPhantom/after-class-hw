let string = "10";
document.write(typeof(string), "<br>");
string = Number(string);
document.write(typeof(string), "<br>");
let integer = 1978;
document.write(typeof(integer), "<br>");
integer = String(integer);
document.write(typeof(integer), "<br>");

//regular expression with search and replace 
let message = "Visit Shop";
let n = message.search(/shop/i);
document.write(n, "<br>");

let message2 = "Visit Clothing";
let res = message2.replace(/clothing/i, "Coffee")
document.write(res)

function add(a,b){
    return a+b
}

document.write("<br>", add(12,12));

//arrow function
 sub= (a,b) => a-b;
 document.write("<br>", sub(21,12))
