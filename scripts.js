function Book(book,pages,status) {
    this.book = book;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        var bookStatus = this.book + ", " + this.pages + ", " + this.status;
        return bookStatus
    }
}

const newBook = new Book("The Hobbit by J.R.R. Tolkien", "295 Pages", "not read yet");
console.log(newBook.info());