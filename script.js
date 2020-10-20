let myLibrary = [];

function Book(title, author, pages, read, rating = "N/A") {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.rating = rating;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(title, author, pages, read, rating) {
    let book = new Book(title, author, pages, read, rating);
    
    myLibrary.push(book);
}

function displayBooks(libraryArray) {
    let table = document.querySelector("#book-table");
    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }
    libraryArray.forEach(book => {
        let row = table.insertRow(-1);
        row.insertCell(0).textContent = book.title;
        row.insertCell(1).textContent = book.author;
        row.insertCell(2).textContent = book.pages;
        row.insertCell(3).textContent = book.read;
        row.insertCell(4).textContent = book.rating;
    });
}


//run
addBookToLibrary("The Silmarillion","J.R.R. Tolkien", 197, "have read", 5);
addBookToLibrary("Harry Potter","J.K. Rowling", 528, "have read", 4);
displayBooks(myLibrary);

addBookToLibrary("Harry Potter 2","J.K. Rowling", 423, "have not read");
displayBooks(myLibrary);

addBookToLibrary("Harry Potter 3","J.K. Rowling", 65, "have not read");
displayBooks(myLibrary);