function validateForm(){
    var x = document.forms["valform"]["fname"].value;
    if (x == ""){
        alert("Field is empty");
        return false;
    }
    else document.write("name submitted");
}
function myFunction(){
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()){
        document.getElementById("result").innerHTML = inpObj.validationMessage;

    }
    else {
        document.getElementById("result").innerHTML = "input OK";
    }
}