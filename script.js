let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(title, author, pages, read, rating) {
    let book = new Book(title, author, pages, read, rating);
    
    myLibrary.push(book);
}

function displayBooks(libraryArray) {
    libraryArray.forEach(book => console.log(book.info()));
}