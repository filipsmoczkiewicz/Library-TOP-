// Define the Book Constructor
class Book {
    constructor(title, author, pages, readPages, color) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readPages = readPages;
        this.isRead = readPages === pages;
        this.color = color; // Add a 'color' property to store the card's color
    }
}

// Create an array to store the books
const myLibrary = [];

// Initial display
displayLibrary();

// Function to add a book to the library
function addBookToLibrary(title, author, pages, readPages) {
    const newBook = new Book(title, author, pages, readPages, getRandomColor());
    myLibrary.unshift(newBook);
    displayLibrary();
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
    addNewBookCard.classList.add('add-new-book-card');
    addNewBookCard.innerHTML = `
        <div class="add-book-button">+</div>
    `;

    // Add a click event listener to show the form for user input
    addNewBookCard.addEventListener('click', showAddBookForm);

    bookshelf.appendChild(addNewBookCard);

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.style.backgroundColor = book.color; // Set the card's background color
        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read Pages: ${book.readPages}</p>
            <p>Status: ${book.isRead ? 'Read' : 'Not Read'}</p>
            <button class="read-button" onclick="toggleReadStatus(${index})">${book.isRead ? 'Read' : 'Not Read'}</button>
            <button class="delete-button" onclick="deleteBook(${index})">Delete</button>
        `;
        bookshelf.appendChild(card);
    });
}

// Function to toggle the read status and update read pages
function toggleReadStatus(index) {
    const book = myLibrary[index];
    if (book.isRead) {
        book.isRead = false;
        book.readPages = 0;
    } else {
        book.isRead = true;
        book.readPages = book.pages;
    }
    displayLibrary();
}

// Function to delete a book
function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}

// Function to show the form for user input as a centered window
function showAddBookForm() {
    // Create a form container as a centered window
    const formContainer = document.createElement('div');
    formContainer.classList.add('add-book-form-container');

    // Create a form element
    const form = document.createElement('form');
    form.classList.add('add-book-form');

    // Create form input fields
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Title';

    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.placeholder = 'Author';

    const pagesInput = document.createElement('input');
    pagesInput.type = 'number';
    pagesInput.placeholder = 'Total Pages';

    const readPagesInput = document.createElement('input');
    readPagesInput.type = 'number';
    readPagesInput.placeholder = 'Read Pages';

    // Create a slider to mark the book as read
    const isReadInput = document.createElement('input');
    isReadInput.type = 'checkbox';

    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add Book';

    // Add event listener to the form
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = titleInput.value;
        const author = authorInput.value;
        const pages = parseInt(pagesInput.value);
        const readPages = parseInt(readPagesInput.value);
        const isRead = isReadInput.checked;

        if (title && author && pages) {
            addBookToLibrary(title, author, pages, readPages);
            displayLibrary();
            closeAddBookForm(formContainer);
        } else {
            console.log('Invalid input. Please provide title, author, and number of pages.');
        }
    });

    // Append form elements to the form
    form.appendChild(titleInput);
    form.appendChild(authorInput);
    form.appendChild(pagesInput);
    form.appendChild(readPagesInput);
    form.appendChild(isReadInput);
    form.appendChild(submitButton);

    // Append the form to the form container
    formContainer.appendChild(form);

    // Append the form container to the document body
    document.body.appendChild(formContainer);
}

// Function to close the add book form
function closeAddBookForm(formContainer) {
    formContainer.remove();
}

// Function to display a form for adding a new book
function addNewBookForm() {
    const title = prompt('Enter the title of the book:');
    const author = prompt('Enter the author of the book:');
    const pages = parseInt(prompt('Enter the number of pages:'));
    const readPages = parseInt(prompt('Enter the number of pages you have read:'));
    const isRead = readPages === pages;

    if (title && author && pages) {
        addBookToLibrary(title, author, pages, readPages);
    } else {
        console.log('Invalid input. Please provide title, author, and number of pages.');
    }
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