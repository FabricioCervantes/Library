let myLibrary = JSON.parse(localStorage.getItem("myLibrary") || "[]");

class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("readStatus");
    if (read.checked) {
        const book1 = new Book(title, author, pages, "Read");
        myLibrary.push(book1);
    } else {
        const book1 = new Book(title, author, pages, "Not read");
        myLibrary.push(book1);
    }
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

loadBooks();

function deleteStorage() {
    window.localStorage.clear();
}

function loadBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        const bookTitle = document.createElement("h4");
        const bookAuthor = document.createElement("h5");
        const bookPages = document.createElement("h5");
        const bookReadBtn = document.createElement("div");
        const deleteBtn = document.createElement("div");

        bookCard.classList.add("card");
        bookCard.setAttribute("id", i);
        bookReadBtn.classList.add("read__btn");
        document.querySelector(".card__container").appendChild(bookCard);
        deleteBtn.classList.add("read__btn");
        deleteBtn.classList.add("delete__btn");

        bookReadBtn.addEventListener("click", function() {
            changeReadStatus(i);
        });
        deleteBtn.addEventListener("click", function() {
            deleteBook(i);
        });

        bookTitle.textContent = myLibrary[i].title;
        bookAuthor.textContent = myLibrary[i].author;
        bookPages.textContent = myLibrary[i].pages + " pages";
        bookReadBtn.textContent = myLibrary[i].readStatus;
        if (myLibrary[i].readStatus == "Read") {
            bookReadBtn.style.backgroundColor = "#B8F1B0";
        }
        deleteBtn.textContent = "Delete";

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookReadBtn);
        bookCard.appendChild(deleteBtn);
    }
}

function changeReadStatus(bookId) {
    if (myLibrary[bookId].readStatus == "Read") {
        myLibrary[bookId].readStatus = "Not read";

    } else {
        myLibrary[bookId].readStatus = "Read";
    }
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    location.reload();
}

function deleteBook(bookId) {
    const id = document.getElementById(bookId);
    id.parentNode.removeChild(id);
    myLibrary.splice(bookId, 1);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function showForm() {
    const form = document.getElementById('form');
    const overlay = document.getElementById('overlay');
    if (!form.style.display || form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'flex';
        overlay.style.opacity = '1';
        overlay.style.pointerEvents = 'all';

    } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
    }
}