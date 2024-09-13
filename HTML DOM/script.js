let person1 = {
    Name : "David",
    LN : "Baszucki",
    Age : 24,
    Address : 'Canada',
    Gender : 'male'
}

document.write (person1.Name, "<br>");
document.write (person1.LN, "<br>");
document.write (person1.Age, "<br>");
document.write (person1.Address,"<br>");
document.write (person1.Gender, "<br>")

//the code above is a list, this code below is an array
let myarray = ["Apple", "Banana", "Orange"];
document.write (myarray, "<br>");
document.write (myarray [0], "<br>");
document.write (myarray [1], "<br>");
document.write (myarray[2], "<br>");
// addition of new elements into the array
myarray.push("Cucumber");
document.write (myarray,"<br>");
//removal of elements insdie of the array
myarray.pop();
document.write(myarray)