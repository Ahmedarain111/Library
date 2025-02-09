const myLibrary = [];
const bookContainer = document.querySelector('.books-container');
const dialog = document.querySelector('dialog');
const addButton = document.querySelector('button');
const form = document.querySelector('form');

addButton.addEventListener('click', () => dialog.showModal());
form.addEventListener('submit', function (event) {
    event.preventDefault();
    addBookToLibrary();
})


function Book(name, author, pages, read = false) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary() {
    const name = document.querySelector('#bookName');
    const author = document.querySelector('#bookAuthor');
    const pages = document.querySelector('#bookPages');
    const read = document.querySelector('#readCheck');
    let r = false;

    if (read.value == 'on') r = true;
    const book = new Book(name.value, author.value, pages.value, r)
    myLibrary.push(book);

    dialog.close();
    displayBooks();

    name.value = ''
    author.value = ''
    pages.value = ''
    read.value = ''
}

function createBookNode(name, author, pages, read) {
    const b = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    removeBtn.innerHTML = "Remove";

    b.innerHTML =
        `<p><b>${name}</b></p>
    <p>by <b>${author}</b></p>
    <p>${pages} pages</p>`;

    b.classList = "card";
    removeBtn.classList = 'submit';
    readBtn.classList = 'submit'
    readBtn.style.backgroundColor = read ? "green" : "red";
    readBtn.innerText = read ? "Read" : "Not Read";


    readBtn.addEventListener('click', () => {
        if (readBtn.style.backgroundColor === "green") {
            readBtn.innerText = "Not read";
            readBtn.style.backgroundColor = 'red';
        }
        else {
            readBtn.innerText = "Read";
            readBtn.style.backgroundColor = 'green';
        }
    });

    removeBtn.addEventListener('click', function () {
        const index = myLibrary.findIndex(book =>
            book.name === name && book.author === author && book.pages == pages && book.read === read
        );

        if (index !== -1) {
            myLibrary.splice(index, 1);
        }

        b.remove();
    });

    b.appendChild(readBtn);
    b.appendChild(removeBtn);

    return b;
}

function displayBooks() {
    bookContainer.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        bookContainer.appendChild(createBookNode(myLibrary[i].name, myLibrary[i].author,
            myLibrary[i].pages, myLibrary[i].read));
    }
}