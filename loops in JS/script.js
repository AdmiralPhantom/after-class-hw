// for (let i = 1 ; i <= 10 ; i++){
//     document.write(i+",");
// }
// document.write("<br>")

// // even

// for (let i = 0 ; i<= 10 ; i += 2){
//     document.write(i+",")
// }
// document.write("<br>")
// // odd
// for (let i = 0 ; i<= 10 ; i+=2){
//      document.write(i+",")
// }
// document.write("<br>")
// // reverse 
// for (let i = 1 ; i <= 10 ; i--){
//     document.write(i+",")
// }

// //while loop
// let y = 1; // starting point
// do{
//     document.write(y+",")
//     y++; //increment
// }
//do-while loop

let f = 1; //starting point
do{
    document.write(f+",");
    f++; //increment
}
while (f <=10);

// function
function add (m,n){
    document.write(m+n);
}
add (12,3);
// another function with return type
function sum(p,q){
    return p+q;
}
document.write (sum(21,4))
//count function 
let k = 0;
function count(){
    k+=1;
    document.getElementById("op").innerHTML = k;
}