let library= [];

console.log(library);
let book1={
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  yearPublished: 1925,
  available: true
};

let book2={
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  yearPublished: 1960,
  available: true
};

let book3 = {
  title: "1984",
  author: "George Orwell",
  yearPublished: 1949,
  available: false
};

let book4 = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  yearPublished: 1813,
  available: true
};
library.push(book1,book2,book3,book4 );
console.log(library);

book3.available = true
console.log(book3);

library.splice(3,1);
console.log(library);

for(let i= 0; i < library.length; 1++){
    if(library[i].title.includes("The Great Gatsby")){
        console.log("true and available");
    }
}
