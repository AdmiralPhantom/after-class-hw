// var myObj = { name: "Riya", age: 12, grade: 7 };

// var myJSON = JSON.stringify(myObj); // converts object to JSON for sending data

// var newObj = JSON.parse(myJSON); // converts JSON into object while receiving data

// document .getElementById("result").innerHTML = newObj.name;
// async function add(a,b) {
//     let response = await a + b;
//     display(response);
    
//     }
    
//     function display(some) {
    
//     document .getElementById("result").innerHTML =
    
//     some;
    
//     }
    
//     add(5,20);

function myDisplayer(some) { 
    document .getElementById("demo").innerHTML = some; 
    
    }
    function sum(a,b){ 
    // var sum = a + b;
    // myDisplayer (sum); 
    // }
    // let myPromise = new Promise(function(myResolve, myReject){
    // // producing code may take some time 
    // let x = 0; // some code (try to change x to 5) 
    // if (x = 0) { 
    // myResolve ("OK"); // when successfull 
    
    // } else {
    // myReject("Error"); // when error 
    
    // }
    // Ds 
    // // consuming code - must wait for fullfilled promise
    // myPromise.then( 
    // function(value) {sum(5,5);}, // code is successfull 
    // function(error) {sum(error);} // code is error 

    function myDisplayer (value) {
        document .getElementById("result").innerHTML = value;
        }
        function myCalculator(numl, num2, myCallback) {
        let sum = numl + num2;
        myCallback(sum);
        }
        myCalculator(5, 5, myDisplayer);