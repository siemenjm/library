//Global Variables--------------------------------------------------
//------------------------------------------------------------------

let myLibrary = [];
const table = document.querySelector("#book-table");
const submissionForm = document.querySelector("book-form");
const submitButton = document.querySelector("#submit-btn");

//Event Listeners---------------------------------------------------
//------------------------------------------------------------------

submitButton.addEventListener("click", function() {update(submissionForm)});

//Book Constructor--------------------------------------------------
//------------------------------------------------------------------

function Book(title, author, genre, pages, read, rating = "N/A") {
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

function addBookToLibrary(title, author, genre, pages, read, rating) {
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
        row.insertCell(5).textContent = book.read;
        row.insertCell(4).textContent = book.rating;
    });
}

//Main Function-----------------------------------------------------
//------------------------------------------------------------------

function update(form) {
    addBookToLibrary(form.elements[0].value,form.elements[1].value, form.elements[2].value, form.elements[3].value, form.elements[4].value, form.elements[5].value);

    displayBooks(myLibrary);
}