'use strict';


const openModalBtn = document.querySelector('.openModalBtn')
const modalBackground = document.querySelector('.modalBackground')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.closeModal')
const form = document.querySelector('.form')
const authorInput = form.querySelector('#author')
const titleInput = form.querySelector('#title')
const pagesInput = form.querySelector('#pages')
const readInput = form.querySelector('#read')
const addBookBtn = form.querySelector('.addBookBtn')
const cardContainer = document.querySelector('.container__card')
const card = document.querySelector('.data__card')
let myLibrary= []
let bookFound


class NewBook {
    // Create id per object
    id = (Date.now() + '').slice(-10)

    //constructor function to make new object
    constructor(title, author, pages, isread) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isread = isread;
    }
}



class App {
    // add input value to library object
    constructor() {
        // Attach event handlers to modal 
        openModalBtn.addEventListener('click', this.showModal)
        closeModal.addEventListener('click', this.hideModal)
        addBookBtn.addEventListener('click', this.newBook.bind(this)) // 'this' here is bound to App object
        }

    showModal() {
        modal.style.display = "block"
        modalBackground.style.display = "block"
    }
    hideModal() {
        modal.style.display = "none"
        modalBackground.style.display = "none"
        authorInput.value = titleInput.value = pagesInput.value = ''
    }

  

    newBook(e) {
        // Prevent default reload of submit
        e.preventDefault()

        // Get data from form
        const authorValue = authorInput.value
        const titleValue = titleInput.value
        const pagesValue = +pagesInput.value
        const readValue = readInput.checked 

        //if one of the input values is empty, alert message
        if (authorValue === '' || titleValue === '' || pagesValue === '') {
            return alert("Please fill in all information")
        }

        let newBook = new NewBook(titleValue, authorValue, pagesValue, readValue)

        this.hideModal()
        this.renderLibraryCard(newBook)
        myLibrary.push(newBook)
    }

    findBookId (newBook) {
        bookFound = myLibrary.find(arr => arr.id === newBook.id)
    }
    // render new object in the book card
    renderLibraryCard(newBook) {//add input type checkbox
        const containerCard = document.querySelector('.container__card')
        const dataCard = document.createElement('div')
        dataCard.classList.add('data__card')
        if(readInput.checked) dataCard.classList.add('isRead')
        containerCard.appendChild(dataCard)
        dataCard.setAttribute('id', newBook.id)

        let html = `    
        <div class="book__details">
         <h2 class="book__title">${newBook.title}</h2>
         <h2 class="book__author">🖊️ by ${newBook.author}</h2>
         <h2 class="book__author">📖 ${newBook.pages} pages</h2>
        </div>
        `;
        dataCard.insertAdjacentHTML('afterbegin', html)
        
        const cardBtn = document.createElement('div')
        cardBtn.classList.add('card__btn')
        dataCard.appendChild(cardBtn)

        const readBtn = document.createElement('button')
        readBtn.innerHTML = 'To read'
        readBtn.classList.add('card__read')
        cardBtn.appendChild(readBtn)
        if (readInput.checked) {
            readBtn.innerHTML = 'Finished'
            readBtn.classList.add('isRead')
            dataCard.classList.add('isRead')
        };

        readBtn.addEventListener('click', () => {
            this.findBookId(newBook) // gives bookFound parameter
            readBtn.classList.toggle('isRead')
            dataCard.classList.toggle('isRead')
            if (bookFound.isread === true) {
                bookFound.isread = false;
                readBtn.innerHTML = 'To read'
            } else {
                bookFound.isread = true;
                readBtn.innerHTML = 'Finished'
            }
        })

        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = 'Delete'
        deleteBtn.classList.add('card__delete')
        cardBtn.appendChild(deleteBtn)
        deleteBtn.addEventListener('click', (e) => {
            let card = e.target.parentNode.parentNode
            card.parentElement.removeChild(card)
            this.findBookId(newBook)
            myLibrary.pop(bookFound);
        });

         // <div class="card__btn">
        //  <button class="card__read">To read</button>
        //  <button class="card__delete">Delete</button>
        // </div>

        // const createElement = function (elName, el, parentEl) {
        //     elName = document.createElement(`${el}`)  
        //     elName.classList.add(`${elName}`)  
        //     parentEl.appendChild(elName)
        // }
        
         // const cardBtn = document.querySelector('.card__btn')
        // const readBtn = document.querySelector('.card__read')
        // const deleteBtn = document.querySelector('.card__delete')
     
    }
   // const editBtn = document.createElement('button')
        // editBtn.innerHTML = 'Edit'
        // editBtn.classList.add('card__edit')
        // cardBtn.appendChild(editBtn)
        // editBtn.addEventListener('click', () => {
        //     modal.style.display = "block"
        //     modalBackground.style.display = "block"
        //     titleInput.value = newBook.title
        //     authorInput.value = newBook.author
        //     pagesInput.value = newBook.pages
                
        // })

    // showEditModal() {
    //     modal.style.display = "block"
    //     modalBackground.style.display = "block"
    //     titleInput.value = newBook.title
    //     console.log(newBook)
    // }
}


// Google Books API
const testData = fetch('https://www.googleapis.com/books/v1/volumes?q=flights+inauthor:olga&key=AIzaSyDLXEtdYc3Vd0fhAsIoXR-rjr1mMAW_32w')
    .then(response => response.json())
    .then(result => {
        const bookInfo = result.items[0].volumeInfo;
        const {authors, categories, language, pageCount, title} =bookInfo
        console.log(authors, categories, language, pageCount, title)
        console.log(bookInfo.imageLinks.thumbnail)
        //authors, categories, imageLinks.thumbnail, language, pageCount, title
    });


// create App object and store data in it
const app = new App();



