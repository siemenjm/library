//Global Variables--------------------------------------------------
//------------------------------------------------------------------

let myLibrary = [];
let bookTitle = document.querySelector("#title-id");
let bookAuthor = document.querySelector("#author-id");
let bookGenre = document.querySelector("#genre-id");
let bookPages = document.querySelector("#pages-id");
let bookRead = document.querySelector("#read-id");
let bookRating = document.querySelector("#rating-id");

const table = document.querySelector("#book-table");
const submitButton = document.querySelector("#submit-button");

//Event Listeners---------------------------------------------------
//------------------------------------------------------------------

submitButton.addEventListener("click", function() {
    console.log(bookTitle.value);
    console.log(bookAuthor.value);
    console.log(bookGenre.value);
    console.log(bookPages.value);
    console.log(bookRead.value);
    console.log(bookRating.value);
    update();
});

//Book Constructor--------------------------------------------------
//------------------------------------------------------------------

function Book(title, author, genre, pages, read, rating) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.rating = rating;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

//Helper Functions--------------------------------------------------
//------------------------------------------------------------------

function addBookToLibrary(title, author, genre, pages, read, rating = "N/A") {
    let book = new Book(title, author, genre, pages, read, rating);
    
    myLibrary.push(book);
}

function displayBooks(libraryArray) {
    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }
    libraryArray.forEach(book => {
        let row = table.insertRow(-1);
        row.insertCell(0).textContent = book.title;
        row.insertCell(1).textContent = book.author;
        row.insertCell(2).textContent = book.genre;
        row.insertCell(3).textContent = book.pages;
        row.insertCell(4).textContent = book.read;
        row.insertCell(5).textContent = book.rating;
    });
}

function resetForm() {
    bookTitle.value = null;
    bookAuthor.value = null;
    bookGenre.value = null;
    bookPages.value = null;
    bookRead.value = "no";
    bookRating.value = "N/A";
}

//Main Function-----------------------------------------------------
//------------------------------------------------------------------

function update(form) {
    addBookToLibrary(bookTitle.value,bookAuthor.value, bookGenre.value, bookPages.value, bookRead.value, bookRating.value);
    displayBooks(myLibrary);
    resetForm();
}