const myLibrary = [];

function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks()  {
    for(const b of myLibrary) {
        console.table(b);
    }
}


addBookToLibrary(new Book("ABC", "QWE", true));
addBookToLibrary(new Book("ABC", "QWE", true));
displayBooks();