//initiation of a class in Javascript
class student{
    constructor(name,birthyear) {
        this.name= name;
        this.birthyear= birthyear;

    }
    //age calculations
    age(){
        let date = new Date();
        return date.getFullYear() - this.birthyear;
    }
}

//use student class with 2 objects
let student1= new student("Arshad",2007);
document.getElementById("student1").innerHTML = "my name is " + student1.name + " My birthyear is " + student1.birthyear + "and I am " + student1.age() + " years old";

let student2= new student("Shaheem", 2012);
document.getElementById("student2").innerHTML = "My name is " + student2.name + " My birthtyear is " + student2.birthyear + " my age is " +student2.age();
let i = 0;

for 
