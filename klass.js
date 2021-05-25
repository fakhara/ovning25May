//Del 2

//Skapa en klass som representerar en person med firstname och lastname.
//skapa sedan en instans av denna klass med “new” uttrycket. Skicka in “john” och “doe” som argument
class Person{
     constructor(firstname, lastname){
         this.firstname = firstname;
         this.lastname = lastname;
     }
}
const myPerson = new Person("John", "Doe");
console.log(myPerson);

//Skapa en klass som representerar en katt.Katt klassen kommer att ha dessa fält: breeds, id, url, width, height
//Skriv sedan en funktion som hämtar en kattbild från:https://api.thecatapi.com/v1/images/search
//och som ger dig en instans av katt-klassen tillbaka med fälten i klassen populerade med
//data från responsen du fick tillbaka från sajten.

class Cat{
    constructor(breeds, id, url, width,height){
        this.breeds = breeds;
        this.id = id;
        this.url = url;
        this.width = width;
        this.height = height;
    }
}
fetch("https://api.thecatapi.com/v1/images/search")
.then(response => response.json().then(data => {
    const firstItemArray = data[0];
    const myCat = new Cat(
        firstItemArray.breeds,
        firstItemArray.id,
        firstItemArray.url,
        firstItemArray.width,
        firstItemArray.height
    );
    console.log(myCat);
}));
