//Global Variables--------------------------------------------------
//------------------------------------------------------------------

let myLibrary = [];
const table = document.querySelector("#book-table");
//const addBtn = document.querySelector("#add-btn");

//Event Listeners---------------------------------------------------
//------------------------------------------------------------------

//addBtn.addEventListener("click", function() {update()});

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

function update() {
    addBookToLibrary("The Silmarillion","J.R.R. Tolkien", "Fantasy", 197, "have read", 5);
    addBookToLibrary("Harry Potter","J.K. Rowling", "Children's Fantasy", 528, "have read", 4);
    addBookToLibrary("Harry Potter 2","J.K. Rowling", "Children's Fantasy",423, "have not read");
    addBookToLibrary("Harry Potter 3","J.K. Rowling", "Children's Fantasy",65, "have not read");

    displayBooks(myLibrary);
}