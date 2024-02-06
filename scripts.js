class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
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
        this.books = this.books.filter((book) => book.title !== title); 
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

// Get the modal
var modal = document.getElementById("addBookModal");

// Get the button that opens the modal
var btn = document.getElementById("addBookBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
