const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Voici la liste des entrepreneurs nés dans les années 70's")
const seventies = entrepreneurs.filter( date => date.year >= 1970 && date.year < 1980);
console.log(seventies);


console.log("Voici un tableau contenant les prénoms et noms des entrepreneurs.")
array = []
for (let index in entrepreneurs) {
  array.push(entrepreneurs[index].first + " " + entrepreneurs[index].last);
}
console.log(array);

console.log("L'âge des entrepreneurs aujourd'hui.")
for (let index in entrepreneurs) {
 age = 2019 - entrepreneurs[index].year
 console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last + ` aurait ${age} ans.`);
}


console.log("Trier les entrepreneurs par ordre alphabétique.")
entrepreneurs.sort(function(a, b){
    var lastA=a.last.toLowerCase(), lastB=b.last.toLowerCase();
    if (lastA < lastB) 
        return -1; 
    if (lastA > lastB)
        return 1;
    return 0;
})

console.log(entrepreneurs);


