class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = title;
    }
}

class Library {
    constructor(){
        this.books = [];
    }

    addBook(newBook) {
        if (newBook instanceof Book && !this.isInLibrary(newBook)) {
            this.books.push(newBook);
        } else {
            console.error("Attempted to add an object that is not a Book.")
        }
    }

    removeBook(title) {
        this.books.filter((book) => book.title !== title);
    }

    getBook(title) {
        return this.books.find((book) => book.title === title);
    }

    isInLibrary (newBook) {
        return this.books.some((book) => book.title ===newBook.title);
    }

    listBooks() {
        this.books.forEach((book,index) => {
                console.log(`${index + 1}: ${book.title} by ${book.author}, ${book.pages} pages`);
        });
    }
}

const myLibrary = new Library();
let book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223);
let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 310);

myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.listBooks();  // Lists all books in the library