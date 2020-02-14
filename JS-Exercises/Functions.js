// JAVASCRIPT FUNCTIONS AND CALLBACKS
// 1
function add (n1, n2) {
	return n1 + n2;
}

var sub = function(n1,n2) {
	return n1-n2;
}

var cb = function(n1,n2,callback) {
	return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
}

// 2
console.log( add(1,2) );
// This will print 3, the result of the addition of 1 and 2

console.log( add );
// Prints that the given parameter is a function called add

console.log( add(1,2,3) );
// The add function will take the 1 and the 2, add them together, but it will just ignore the third
// parameter. If we wanted to access the third argument, we would need to use the arguments object.

console.log( add(1) );
// Due to the fact, that we only are passing a single arugment, when the add function goes to add
// first and second argument together, the seconed will not be anything which causes the Not a Number
// print.

console.log( cb(3,3,add) );
// The third argument is a function, we want to apply on the first two arguments. What happens
// is that the function given (add) is called on 1 and 2, and the result is then concatinated with
// the string defined in the function cb.

console.log( cb(4,3,sub) );
// The same as the previous function, but here we see that the text in the cb function does not
// align with the function given, in this case sub - because we are still saying n1 + n2 and
// not n1 - n2.

// console.log(cb(3,3,add()));
// The problem with this is the function call add(), by using add() instead of add, we are actually
// calling the function add, before we enter cb. By using add instead, we are passing the reference
// to the function instead - and thereby letting cb call the function.

console.log(cb(3,"hh",add));
// In this case, the second argument is a string and therefor the add function will operate with
// the arguments as string, thereby concatinating the 3 onto hh.

// 3)

var betterCallback = function(n1,n2,callback) {
	if(typeof n1 !== "number" || typeof n2 !== "number") {
		return "The two first arguments must be numbers"
	}
	if(typeof callback !== "function") {
		return "The third argument must be a function";	
	}
	return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
}

// Testing the checks for the betterCallback function.
console.log(betterCallback("h",1,add));
console.log(betterCallback(1,2,5));
// Try-Catch if something goes wrong in the function call.
try {
	console.log(betterCallback(1,2,add));
} catch (e) {
	console.error(e.name + ": " + e.message);
}

// 4
var mul = function(n1,n2) {
	return n1*n2;
}
console.log(betterCallback(4,20,mul));


// 5
console.log(betterCallback(100,2, (x,y) => (x/y)));



// CALLBACKS (WITH MAP, FILTER, AND FOREACH)
// 1
var names = ["Lars","Jan","Peter","Bo","Frederik"];
var filteredNames = names.filter(name => (name.length <= 3));
names.forEach(name => console.log(name));
filteredNames.forEach(name => console.log(name));

// 2
var upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

// 3
var makeUL = function (items) {
	var inner = items.map(item => ("\t<li>"+item+"</li>"));
	inner.unshift("<ul>");
	inner.push("</ul>");
	return inner.join("\n");
}

console.log(makeUL(["Lars","Peter","Jan","Ian"]));

// 4
var cars = [
	{id:1,year:1997,make:'Ford',model:'E350',price:3000},
	{id:2,year:1999,make:'Chevy',model:'Venture',price:4900},
	{id:3,year:2000,make:'Chevy',model:'Venture',price:5000},
	{id:4,year:1996,make:'Jeep',model:'Grand Cherokee',price:4799},
	{id:5,year:2005,make:'Volvo',model:'V70',price:44799}
];

console.log("Cars newer than 1999");
console.log(cars.filter(car => (car.year > 1999)));
console.log("Volvos:");
console.log(cars.filter(car => (car.make == "Volvo")));
console.log("Cars below 5000 in price:");
console.log(cars.filter(car => (car.price < 5000)));

var makeSQL = function(items) {
	var keys = Object.keys(items[0])
	var output = items.map(car => {
		var temp = [];
		for(var i = 0; i < keys.length; i++) {
			temp.push(car[keys[i]]);
		}
		return temp.join(",");
	})
	var result = output.map(e => {
		return "INSERT INTO cars ("+keys.join(",")+") VALUE (" + e +")";	
	});
	return result;
} 
console.log(makeSQL(cars));

