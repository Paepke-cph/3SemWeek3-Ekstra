
(function() {
    var buttons = document.getElementById("buttons");
    buttons.addEventListener("click", e => {
        var display = document.getElementById("display");
        if(e.target.id !== 'calculate')
            display.innerText += e.target.innerText;
    });

    var calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", e => {
        var display = document.getElementById("display");
        var sum = 0;
        if(display.innerText.indexOf("+") > 0) {
            var numbers = display.innerText.split("+");
            sum = numbers.reduce((x,y) => Number(x) + Number(y));
        }
        else if(display.innerText.indexOf("-") > 0) {
            var numbers = display.innerText.split("-");
            sum = numbers.reduce((x,y) => Number(x)-Number(y));
        }
        else if(display.innerText.indexOf("*") > 0) {
            var numbers = display.innerText.split("*");
            sum = numbers.reduce((x,y) => Number(x)*Number(y));
        }
        else if(display.innerText.indexOf("/") > 0) {
            var numbers = display.innerText.split("/");
            console.log(numbers);
            sum = numbers.reduce((x,y) => Number(x)/Number(y));
        }
        display.innerText += "=" + sum; 
    },false);
})();