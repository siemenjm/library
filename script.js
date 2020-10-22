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


    libraryArray.forEach(function(book, index, array){
        let row = document.createElement("tr");
        row.setAttribute("id", index);

        let titleCell = document.createElement("td");
        let authorCell = document.createElement("td");
        let genreCell = document.createElement("td");
        let pagesCell = document.createElement("td");
        let readCell = document.createElement("td");
        let ratingCell = document.createElement("td");
        let removalCell = document.createElement("td");

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        genreCell.textContent = book.genre;
        pagesCell.textContent = book.pages;

        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(genreCell);
        row.appendChild(pagesCell);
        row.appendChild(readCell);
        row.appendChild(ratingCell);
        row.appendChild(removalCell);

        table.appendChild(row);

        createReadCheckbox(readCell);
        createRatingDropdown(ratingCell);
        createRemovalButton(removalCell);
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

function createRemovalButton(cell) {
    let removalButton = document.createElement("input");
    removalButton.setAttribute("type", "button");
    removalButton.setAttribute("name", "remove");
    removalButton.setAttribute("class", "removal-button");
    removalButton.setAttribute("value", "Remove Book");
    cell.appendChild(removalButton);

    let rowId = cell.parentElement.id;
    removalButton.addEventListener("click", function() {
        removeBook(rowId);
    })
}

function removeBook(rowId) {
    myLibrary.splice(rowId, 1);
    displayBooks(myLibrary);
}

function createReadCheckbox(cell) {
    let rowId = cell.parentElement.id;

    let readCheckbox = document.createElement("input");
    readCheckbox.setAttribute("type", "checkbox");
    readCheckbox.setAttribute("name", "read");
    readCheckbox.setAttribute("value", "Read");

    if (myLibrary[rowId].read === "yes") {
        readCheckbox.checked = true;
    } else {
        readCheckbox.checked = false;
    }

    cell.appendChild(readCheckbox);

    readCheckbox.addEventListener("click", function() {
        if (readCheckbox.checked === true) {
            myLibrary[rowId].read = "yes";
        } else {
            myLibrary[rowId].read = "no";
        }
    });
}

function createRatingDropdown(cell) {
    let rowId = cell.parentElement.id;
    let defaultRating = myLibrary[rowId].rating;
    
    let ratingDropdown = document.createElement("select");
    ratingDropdown.setAttribute("id", "table-rating");

    for (i = 0; i <= 5; i++) {
        let rating = document.createElement("option");
        if (i === 0) {
            rating.setAttribute("value", "N/A");
            rating.textContent = "N/A";
            
            if (defaultRating === "N/A") {
                rating.selected = true;
            } else {
                rating.selected = false;
            }
        } else {
            rating.setAttribute("value", i);
            rating.textContent = i;

            if (defaultRating == i) {
                rating.selected = true;
            } else {
                rating.selected = false;
            }
        }

        ratingDropdown.appendChild(rating);
    }

    cell.appendChild(ratingDropdown);
    
    ratingDropdown.addEventListener("change", function() {
        changeRatingDropdown(ratingDropdown, rowId);
    });
}

function changeRatingDropdown(ratingDropdown, rowId) {
    let ratingList = ratingDropdown.childNodes;
    let newRating;
    ratingList.forEach(function(rating, index, array) {
        if (rating.selected === true) {
            newRating = index;

            if (index === 0) {
                newRating = "N/A";
            }
        }
    });

    myLibrary[rowId].rating = newRating;
}

//Main Function-----------------------------------------------------
//------------------------------------------------------------------

function update() {
    addBookToLibrary(bookTitle.value,bookAuthor.value, bookGenre.value, bookPages.value, bookRead.value, bookRating.value);
    displayBooks(myLibrary);
    resetForm();
}