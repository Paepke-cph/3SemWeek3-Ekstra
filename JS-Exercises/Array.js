// A

var boys = ["Peter", "lars", "Ole"];
var girls =["Janne", "hanne", "Sanne"];

// As the array is immutable, the existing arrays will not be changed, but instead we will create a 
// new array. In the case of concat, we will create a new array with the two exsisting arrys.

// B
var all = boys.concat(girls);

// C 
var comma = all.join();
var hyphen = all.join("-");

// D
all.push("Lone","Gitte");

// E
all.unshift("Hans","Kurt");

// F
all.shift();

// G
all.pop();

// H
all.splice(3,2);

// I
all.reverse();

// J
all.sort();

// K
all.sort(function(a,b){
	var aUpperCase = a.toUpperCase();
	var bUpperCase = b.toUpperCase();
	if(aUpperCase > bUpperCase) return 1;
	if(aUpperCase < bUpperCase) return -1;
	else return 0;
});

// L
var upperCase = all.map(word => (word.toUpperCase()));

// M
var filtered = all.filter(word => (word.startsWith("l") || word.startsWith("L")));

