document.getElementById("myButton1").onclick = changecolor;
var currentColor = "aqua";

function changecolor(){

    if (currentColor == "aqua"){
        document.body.style.color = "red";
        currentColor = "red";

    } else {
        document.body.style.color = "aqua";
        changecolor = "aqua"
    }
    return currentColor;
}
