let myLibrary = [
    {
        author: "Rebecca Solnit",
        title: "A field guide to getting lost",
        pages: 215,
        read: true
    },
    {
        author: 'Tolkien',
        title: 'Hobbit',
        pages: 295,
        read: false
    }
];
let openModalBtn = document.querySelector('.openModalBtn')
let modal = document.querySelector('.modal')
let closeModal = document.querySelector('.close')
let form = document.querySelector('.form')
const authorInput = form.querySelector('#author')
const titleInput = form.querySelector('#title')
const pagesInput = form.querySelector('#pages')
const addBookBtn = form.querySelector('.addBook')


//constructor function to make new object
function Book(author, title, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// add input value to library object
function addBookToLibrary() {
    let authorValue = authorInput.value
    let titleValue = titleInput.value
    let pagesValue = +pagesInput.value
    let readValue = read.value //need to work on
    const newBook = new Book(authorValue, titleValue, pagesValue, readValue)
    myLibrary.push(newBook);
    renderLibrary(newBook)
}

// render new object in the book card
function renderLibrary(newBook) {
    let html = `
    <div class="data__card" data-id="">
         <h2 class="books__value title">${newBook.title}</h2>

        <div class="book__details">
            <span class="books__icon">🖊️</span>
            <span class="books__unit">Author</span>
            <span class="books__value">${newBook.author}</span>
        </div>
        <div class="book__details">
            <span class="books__icon">📖</span>
            <span class="books__unit">Pages</span>
            <span class="books__value">${newBook.pages}</span>
        </div>
        <div class="book__details">
            <span class="books__icon">🔖</span>
            <span class="books__unit">Read?</span>
            <span class="books__value">${newBook.read}</span>
        </div>
        <div class="card__btn">
            <button class="card__edit">Edit</button>
            <button class="card__delete">Delete</button>
        </div>
    </div>`
}

function showBooks() {
    for (let book of myLibrary) {
        console.table(book)
    }
}

//to open modal window
openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block'
})

// to add input data to library object
addBookBtn.addEventListener('click', () => {
    addBookToLibrary()
})

// closeModal.addEventListener('click', function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none"
//     }
// })


//Challenge ideas : books-owned, add bookcover photos,total pages of books read,
//oct 25 todo: js functions(display modal window, add data to list)