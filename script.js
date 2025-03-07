class Book {
    constructor(name, author, pages, read = false) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(name, author, pages, read) {
        const newBook = new Book(name, author, pages, read);
        this.books.push(newBook);
        this.displayBooks();
    }

    removeBook(index) {
        this.books.splice(index, 1);
        this.displayBooks();
    }

    toggleRead(index) {
        this.books[index].read = !this.books[index].read;
        this.displayBooks();
    }

    displayBooks() {
        bookContainer.innerHTML = '';
        this.books.forEach((book, index) => {
            bookContainer.appendChild(this.createBookNode(book, index));
        });
    }

    createBookNode(book, index) {
        const bookElement = document.createElement('div');
        bookElement.classList = "card";

        bookElement.innerHTML = `
            <p><b>${book.name}</b></p>
            <p>by <b>${book.author}</b></p>
            <p>${book.pages} pages</p>
        `;

        const readBtn = document.createElement('button');
        readBtn.classList = 'submit';
        readBtn.style.backgroundColor = book.read ? "green" : "red";
        readBtn.innerText = book.read ? "Read" : "Not Read";

        readBtn.addEventListener('click', () => this.toggleRead(index));

        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = "Remove";
        removeBtn.classList = 'submit';
        removeBtn.addEventListener('click', () => this.removeBook(index));

        bookElement.appendChild(readBtn);
        bookElement.appendChild(removeBtn);

        return bookElement;
    }
}


const bookContainer = document.querySelector('.books-container');
const dialog = document.querySelector('dialog');
const addButton = document.querySelector('button');
const form = document.querySelector('form');
const library = new Library();

addButton.addEventListener('click', () => dialog.showModal());

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('#bookName').value;
    const author = document.querySelector('#bookAuthor').value;
    const pages = document.querySelector('#bookPages').value;
    const read = document.querySelector('#readCheck').checked;

    library.addBook(name, author, pages, read);
    
    form.reset();
    dialog.close();
});