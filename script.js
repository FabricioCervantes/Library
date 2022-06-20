let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

const book1 = new Book("1984", "George Orwell", "255", "Read");
const book2 = new Book("It", "Stephen King", "1094 pages", "Not read");


function formV() {
    const form = document.getElementById('form');

    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'flexgit';
    } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
    }
}

console.log(book1.title);

function addBookToLibrary() {
    myLibrary.push(book1);
    myLibrary.push(book2);
}

addBookToLibrary();

for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("h4");
    const bookAuthor = document.createElement("h5");
    const bookPages = document.createElement("h5");
    const bookReadBtn = document.createElement("div");


    bookCard.classList.add("card");
    bookReadBtn.classList.add("read__btn");
    document.querySelector(".card__container").appendChild(bookCard);

    bookTitle.textContent = myLibrary[i].title;
    bookAuthor.textContent = myLibrary[i].author;
    bookPages.textContent = myLibrary[i].pages + " pages";
    bookReadBtn.textContent = myLibrary[i].readStatus;

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookReadBtn);

}