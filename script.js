// Define the Book Constructor
class Book {
    constructor(title, author, pages, isRead, color) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.color = color; // Add a 'color' property to store the card's color
    }
}

// Sample books (you can add more)
const book1 = new Book("Book 1", "Author 1", 200, true, getRandomColor());
const book2 = new Book("Book 2", "Author 2", 300, false, getRandomColor());

// Create an array to store the books
const myLibrary = [book1, book2];

// Initial display
displayLibrary();

// Function to add a book to the library
function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead, getRandomColor());
    myLibrary.push(newBook);
    displayLibrary(); // Call the displayLibrary function to update the view
}

// Function to generate a random color from a predefined list
function getRandomColor() {
    const colors = ['#FF5733', '#FFC300', '#28B463', '#3498DB', '#9B59B6', '#E74C3C', '#F39C12', '#27AE60'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Function to display the library within the bookshelf
function displayLibrary() {
    const bookshelf = document.querySelector('.bookshelf');
    bookshelf.innerHTML = ''; // Clear existing content

    // Create a card for "Add a New Book"
    const addNewBookCard = document.createElement('div');
    addNewBookCard.classList.add('book-card');
    addNewBookCard.classList.add('add-new-book-card'); // You can add a specific class for styling if needed
    addNewBookCard.innerHTML = `
        <h2>Add a New Book</h2>
        <p>+</p>
    `;

    // Add a click event listener to call addBookFromConsole
    addNewBookCard.addEventListener('click', addBookFromConsole);

    bookshelf.appendChild(addNewBookCard);

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.style.backgroundColor = book.color; // Set the card's background color
        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.isRead ? 'Read' : 'Not Read'}</p>
        `;
        bookshelf.appendChild(card);
    });
}

/*
// Function to display the library within the bookshelf
function displayLibrary() {
    const bookshelf = document.querySelector('.bookshelf');
    bookshelf.innerHTML = ''; // Clear existing content

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.style.backgroundColor = book.color; // Set the card's background color
        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.isRead ? 'Read' : 'Not Read'}</p>
        `;
        bookshelf.appendChild(card);
    });
} */



// Function to add a book from the console
function addBookFromConsole() {
    const title = prompt('Enter the title of the book:');
    const author = prompt('Enter the author of the book:');
    const pages = prompt('Enter the number of pages:');
    const isRead = confirm('Have you read this book?');

    if (title && author && pages) {
        addBookToLibrary(title, author, parseInt(pages), isRead);
        displayLibrary();
    } else {
        console.log('Invalid input. Please provide title, author, and number of pages.');
    }
}


/* 
// Function to generate a random book with random title, author, pages, and status
function generateRandomBook() {
    const randomTitle = generateRandomString(10, 15);
    const randomAuthor = generateRandomString(10, 15);
    const randomPages = Math.floor(Math.random() * 241) + 10; // Random pages between 10 and 250
    const randomStatus = Math.random() < 0.5; // Random status (true or false)

    return new Book(randomTitle, randomAuthor, randomPages, randomStatus, getRandomColor());
}

// Function to generate a random string with a specified length
function generateRandomString(minLength, maxLength) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}

// Function to initialize the webpage with 9 random books
function initializeWebpageWithRandomBooks() {
    for (let i = 0; i < 9; i++) {
        const randomBook = generateRandomBook();
        addBookToLibrary(randomBook.title, randomBook.author, randomBook.pages, randomBook.isRead);
    }
    displayLibrary();
}

// Call the initialization function
initializeWebpageWithRandomBooks();
*/
