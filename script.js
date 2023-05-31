const addBookBtn = document.getElementById('add-book-btn'),
    modal = document.getElementById('modal'),
    subtmitBooks = document.getElementById('add-book-submit'),
    modalForm = document.getElementById('modal--form'),
    errorMessage = document.getElementById('error-message'),
    title = document.getElementById('title'),
    author = document.getElementById('author'),
    pages = document.getElementById('pages');

addBookBtn.addEventListener('click', () => {
    modal.showModal();
});

modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (title.value === '' || author.value === '' || pages.value === '') {
        errorMessage.textContent = 'Please fill in all fields';
    } else {
        addBookToLibrary();
        modalForm.reset();
        modal.close();
        errorMessage.textContent = '';
    }
});

let myLibrary = [];

// function Book(title, author, pages) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
// }

// converting to a class

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;

    }
}

function addBookToLibrary() {
    // constructor function
    let book = new Book(title.value, author.value, pages.value);

    myLibrary.push(book);
    // Create a new book element and add it to the DOM
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('h3');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookBtn = document.createElement('button');
    bookDiv.classList.add('card--container');
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookBtn.classList.add('card--container--btn');
    bookBtn.classList.add('delete');
    bookBtn.textContent = 'Remove';
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookBtn);
    document.getElementById('books').appendChild(bookDiv);
}

document.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.delete')) {
        e.target.parentElement.remove();
    }
});