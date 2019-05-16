const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log('Est-ce que tous les livres ont été empruntés au moins une fois ?')
for (index in books)
if (books[index].rented >= 1) {
  console.log("Tous les livres ont été loués au moins une fois.");
}
else {
  console.log("Pas tous les livres ont été loués au moins une fois.");
}


console.log('Quel est le livre le plus emprunté ?')
 var num_max = books.find(book=> book.rented===(Math.max.apply(Math, books.map(function(rent_max) { return rent_max.rented; }))))
console.log(num_max.title);


console.log('Quel est le livre le moins emprunté ?')
  num_min = books.find(book=> book.rented===(Math.min.apply(Math, books.map(function(rent_min) { return rent_min.rented; }))))
console.log(num_min.title);

console.log("Quel est le livre ayant l'ID 873495 ?")
  const found_id = books.find( index => index.id === 873495);
console.log(found_id.title);


console.log("Supprimer le livre avec l'ID 133712")
for (index in books)
if (books[index].id === 133712) {
  var firstElement = books.shift();
  console.log(books);
}

console.log("Voici la liste des livre triés par ordre alphabétique")
books.sort(function(a, b){
    var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase();
    if (titleA < titleB) 
        return -1; 
    if (titleA > titleB)
        return 1;
    return 0;
})

console.log(books);





