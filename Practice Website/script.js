
function age(){

    let c = document.getElementById("current");
    let b = document.getElementById("birth");

    return c - b;
    
    
}

document.getElementById("result").innerHTML = age();
