class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
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

function populateGrid(books) {
    const bookGrid = document.querySelector('.book-grid');

        // Clear the grid first to remove any existing books
        bookGrid.innerHTML = '';

        // Loop over the array of books
        books.forEach((book) => {
            // Create a new div for each book and add class
            const newBook = document.createElement('div');
            newBook.classList.add('book');
    
            // Use the properties of the book to fill in the content
            newBook.innerHTML = `
                <p>Title: ${book.title}</p>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <button class="read">${book.read ? 'Read' : 'Not Read'}</button>
                <button class="remove" data-title="${book.title}">Remove</button>
            `;
    
            // Append the new book to the grid
            bookGrid.appendChild(newBook);
    
            // Add event listener for the remove button
            newBook.querySelector('.remove').addEventListener('click', (e) => {
                // This assumes you have a method to remove a book from your library instance
                myLibrary.removeBook(book.title);
                // Repopulate the grid after removal
                populateGrid(myLibrary.books);
            });
        });
}

document.addEventListener('DOMContentLoaded', () => {
    // Setup New Library
    const myLibrary = new Library();

    // Get Elements
    var btn = document.querySelector(".add-book"); // Use querySelector to get the first element that matches the selector
    const addBookForm = document.getElementById('addBookForm');
    var modal = document.getElementById("addBookModal");    

    // Display Form to Enter Book Information
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Retrieve Information from Form
    addBookForm.addEventListener('submit', function(e) {

        // Prevent Default Form Submission
        e.preventDefault(); 

        // Retrieve values from the form
        const title = document.querySelector('input[name="title"]').value;
        const author = document.querySelector('input[name="author"]').value;
        const pages = document.querySelector('input[name="pages"]').value;
        const read = document.querySelector('input[name="read"]').checked;

        // Create New Book Element
        const newBook = new Book(title, author, pages, read);

        // Append Book
        myLibrary.addBook(newBook);
        myLibrary.listBooks();

        // Close the modal after submission
        const modal = document.getElementById('addBookModal');
        modal.style.display = 'none';

        // Update modal grid
        populateGrid(myLibrary.books);

        // Reset the Form
        addBookForm.reset();
    });
});