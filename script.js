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
        row.setAttribute("id", table.rows.length - 1);
        row.insertCell(0).textContent = book.title;
        row.insertCell(1).textContent = book.author;
        row.insertCell(2).textContent = book.genre;
        row.insertCell(3).textContent = book.pages;
        row.insertCell(4).setAttribute("class", "read-column");
        row.insertCell(5).textContent = book.rating;
        row.insertCell(6).setAttribute("class", "last-column");
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

function createRemovalButtons() {
    const removalCells = document.querySelectorAll(".last-column");
    
    removalCells.forEach(cell => {
        let removalButton = document.createElement("input");
        removalButton.type = "button";
        removalButton.name = "button";
        removalButton.className = "removal-button";
        cell.appendChild(removalButton);

        let buttonRowId = cell.parentElement.id;
    
        removalButton.addEventListener("click", function() {
            removeBook(buttonRowId);
        });
    })  
}

function removeBook(buttonRowId) {
    myLibrary.splice(buttonRowId - 1, 1);
    displayBooks(myLibrary);
    createReadToggles();
    createRemovalButtons();
    console.table(myLibrary);
}

function createReadToggles() {
    let readToggle = document.createElement("input");
    readToggle.type = "checkbox";
    readToggle.name = "read";
    readToggle.className = "read-toggle";
    readToggle.value = "Read";
    cell.appendChild(readToggle);

    let readLabel = document.createElement("label");
    readLabel.for = "read";
    readLabel.textContent = "Read";
    cell.appendChild(readLabel);
    
}

//Main Function-----------------------------------------------------
//------------------------------------------------------------------

function update() {
    addBookToLibrary(bookTitle.value,bookAuthor.value, bookGenre.value, bookPages.value, bookRead.value, bookRating.value);
    displayBooks(myLibrary);
    createReadToggles();
    createRemovalButtons();
    resetForm();
}