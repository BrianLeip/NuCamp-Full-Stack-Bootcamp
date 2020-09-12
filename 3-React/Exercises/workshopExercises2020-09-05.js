class Book {
  constructor(title, author, year, isRead=false) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isRead = isRead;
  }
}

const book1 = new Book('Fight Club', 'Chuck Palahniuk', '1995', true);
console.log(book1.title);

const students = ['James', 'Jose', 'Katya', 'Kelsey', 'Sergey', 'karen'];
console.log(students);

kNames = students.filter(name => name[0] == 'K');
console.log(kNames);