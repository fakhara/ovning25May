//Del 1 
// Skriv en funktion som adderar två tal och returnerar resultatet.
//Kör sedan funktionen med värdet 10 och 20 och printa ut resultatet med console.log.
function add(a,b){
    return a + b;
}
const result = add(10,20);
console.log(result);

//Skriv en funktion som loopar igenom en array och printar ut varje element med console.log.
//kör sedan funktionen och skicka in denna array: ["apple", "pear", "banana", "strawberry"]
function arrayLooper(myArray){
    myArray.forEach(item => console.log(item));
}
arrayLooper(["apple","pear","banana", "strawberry"]);

//Skapa en funktion som tar in ett värde och returnerar true om värdet är delbart med 2 annars false.
function divisble(x){
    return((x % 2 === 0))
}
const result1 = divisble(10);
const result2 = divisble(3)
console.log(result1);
console.log(result2);