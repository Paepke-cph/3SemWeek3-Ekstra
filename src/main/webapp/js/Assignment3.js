var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

function generateTable(cars) {
    var table = document.createElement("TABLE");
    table.setAttribute("id","table");
    table.appendChild(document.createElement("TR"));
    var keys = Object.keys(cars[0]);
    // Add all the keys to the 'header of the table'
    keys.forEach(element => {
        var th = document.createElement("TH")
        th.innerText = element;
        table.appendChild(th);
    });
    // For each car create a TD for every key.
    cars.forEach(car => {
        table.appendChild(document.createElement("TR"));
        var keyIndex;
        for(keyIndex = 0; keyIndex < keys.length; keyIndex++) {
            var td = document.createElement("TD");
            td.innerText = car[keys[keyIndex]];
            table.appendChild(td);
        }
    });
    document.body.append(table);
}

function removeTable() {
    var table = document.getElementById("table");
    if(table !== 'undefined')
        table.remove();
}

function filterList(value) {
    var filteredCars = cars.filter(car => (car.price < value));
    removeTable();
    generateTable(filteredCars);
}

(function() {
    generateTable(cars);
    document.getElementById("filterButton").addEventListener("click", e => {
        var input = document.getElementById("input");
        filterList(input.value);
    });
})();