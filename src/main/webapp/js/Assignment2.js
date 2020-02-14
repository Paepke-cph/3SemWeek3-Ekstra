var startNames = ["Peter","Ian","Lars","Poul"];

function getNameListValues() {
    var items = document.getElementById("nameList").getElementsByTagName("LI");
    var i;
    var values = []
    for(i = 0; i < items.length; i++) {
        values.push(items[i].innerText);
    }
    return values;
}

function remakeAll(values) {
    removeUL();
    removeForm();
    makeUL(values);
    makeInputField();
    makeRemoveButtons();
}

function removeLastName() {
    var values = getNameListValues();
    values.pop();
    remakeAll(values);
}

function removeFirstName() {
    var values = getNameListValues();
    values.shift();
    remakeAll(values);
}

function addName(e) {
    e.preventDefault();
    var values = getNameListValues();
    var inputValue = document.getElementsByName("input")[0].value;
    values.push(inputValue);
    remakeAll(values);
}

function removeUL() {
    var nameList = document.getElementById("nameList");
    if(nameList !== 'undefined')
        nameList.remove();
}
function removeForm() {
    var addNameForm = document.getElementById("addNameForm");
    if(addNameForm !== 'undefined')
        addNameForm.remove();
}
function makeUL (items) {
	var inner = items.map(item => ("<li>"+item+"</li>"));
	inner.unshift("<ul id=\"nameList\">");
	inner.push("</ul>");
	document.body.innerHTML += (inner.join(""));
}

function makeInputField() {
    var form = document.createElement("FORM");
    form.setAttribute("id", "addNameForm");
    var input = document.createElement("INPUT");
    input.setAttribute("name", "input");
    input.setAttribute("type","text");
    var submit = document.createElement("INPUT")
    submit.setAttribute("type","submit");
    submit.setAttribute("value","Add name");
    submit.addEventListener("click", addName);
    form.appendChild(input);
    form.appendChild(submit);
    document.body.append(form);
}

function makeRemoveButtons() {
    var form = document.getElementById("addNameForm");
    var removeFirst = document.createElement("INPUT");
    removeFirst.setAttribute("type","submit");
    removeFirst.setAttribute("id", "removeFirst");
    removeFirst.setAttribute("value", "Remove First");
    removeFirst.addEventListener("click",removeFirstName)
    var removeLast = document.createElement("INPUT")
    removeLast.setAttribute("type","submit");
    removeLast.setAttribute("id", "removeLast");
    removeLast.setAttribute("value", "Remove Last");
    removeLast.addEventListener("click",removeLastName);
    form.appendChild(removeFirst);
    form.appendChild(removeLast);
}

function thisAndTargetToParagraph(e) {
    var element = document.getElementById("thisAndTarget");
    element.innerHTML = "This:" + this.id + ", Target: " + e.target.id;
}

function consoleOutThisAndTarget(e) {
    console.log(this.id);
    console.log(e.target.id);
}

// Function runs as soon as it is pickud up by the browser.
(function() {
    outer.addEventListener("click", thisAndTargetToParagraph);
    
    makeUL(startNames);
    makeInputField();
    makeRemoveButtons();
})();





