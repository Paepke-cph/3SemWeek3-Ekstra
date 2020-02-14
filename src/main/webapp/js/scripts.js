var elements = document.getElementsByTagName("DIV");
var i;
for(i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "blue";
}

redColorButton.addEventListener("click", e => {
    for(var j = 0; j < elements.length; j++) {
        elements[j].style.backgroundColor = "red";
    }
});

