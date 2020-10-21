//Global Variables--------------------------------------------------
//------------------------------------------------------------------

let myLibrary = [];
let bookTitle = document.querySelector("#title-id");
let bookAuthor = document.querySelector("#author-id");
let bookGenre = document.querySelector("#genre-id");
let bookPages = document.querySelector("#pages-id");
let bookRead = document.querySelector("#read-id");
let bookRating = document.querySelector("#rating-id");

const tableContainer = document.querySelector("#table-container");
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
    let table = document.createElement("table");
    let tableColumns = 7;

    for (i = 0; i <= libraryArray.length; i++) {
        let row = document.createElement("tr");

        for (j = 0; j <= tableColumns; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("id", i+", "+j);
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
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