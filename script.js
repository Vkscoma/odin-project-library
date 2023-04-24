const addBookBtn = document.getElementById('add-book-btn'),
    modal = document.getElementById('modal'),
    subtmitBooks = document.getElementById('add-book-submit'),
    modalForm = document.getElementById('modal--form');

addBookBtn.addEventListener('click', () => {
    modal.showModal();
});

subtmitBooks.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    modalForm.reset();
    modal.close();
});

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        pages = document.getElementById('pages').value;

    // constructor function
    const book = new Book(title, author, pages);
    myLibrary.push(book);
    // Create a new book element and add it to the DOM
    const bookElement = document.createElement('div');
    bookElement.classList.add('card--container');
    bookElement.innerHTML = `
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <button class="card--container--btn delete">Remove</button>
    `;
    document.getElementById('books').appendChild(bookElement);
    console.log(myLibrary);
}

document.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.delete')) {
        e.target.parentElement.remove();
    }
});