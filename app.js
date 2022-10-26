

let openModalBtn = document.querySelector('.openModalBtn')
let modal = document.querySelector('.modal')
let closeModal = document.querySelector('.closeModal')
let form = document.querySelector('.form')
const authorInput = form.querySelector('#author')
const titleInput = form.querySelector('#title')
const pagesInput = form.querySelector('#pages')
const addBookBtn = form.querySelector('.addBookBtn')

const card = document.querySelector('.data__card')



class NewBook {
    //constructor function to make new object
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


class App {

    #myLibrary = []

    // add input value to library object
    constructor() {

        // Attach event handlers to modal 
        openModalBtn.addEventListener('click', this.showModal)
        closeModal.addEventListener('click', this.hideModal)
        addBookBtn.addEventListener('click', this.newBook.bind(this))

        //loop object and render
        // this.renderLibraryCard(book)

    }

    showModal() {
        modal.style.display = "block"
    }
    hideModal() {
        modal.style.display = "none"
    }

    newBook(e) {
        // Prevent default reload of submit
        e.preventDefault()

        // Get data from form
        const authorValue = authorInput.value
        const titleValue = titleInput.value
        const pagesValue = +pagesInput.value
        const readValue = read.value //need to work on
        let bookData = new NewBook(titleValue, authorValue, pagesValue, readValue)
        // myLibrary.push(newBook);
        // renderLibrary(newBook)

        this.#myLibrary.push(bookData)
        this.renderLibraryCard(bookData)

    }

    // render new object in the book card
    renderLibraryCard(newBook) {
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
    </div>`;
        card.insertAdjacentHTML('afterend', html)
    }

    showBooks() {
        for (let book of myLibrary) {
            console.table(book)
        }
    }
}

const app = new App(); // create App object and store data in it

// Challenge ideas
//  books - owned
//  add bookcover photos
//  total pages of books read
//  storage api

//oct 25 todo: js functions(display modal window, add data to list)