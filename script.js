const myLibrary = [];

function Book(name, author) {
    this.name = name;
    this.author = author;
}

function addBookToLibrary(book) {
    let name = prompt("Book name: ");
    let author = prompt("Author's name: ");

    myLibrary.push(new Book(name, author));
}

function displayBooks()  {
    for(const b of myLibrary) {
        console.table(b);
    }
}


const addButton = document.querySelector('button');
addButton.addEventListener('click', () => addBookToLibrary());

displayBooks();