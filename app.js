


//Note on nov 3 :
// deleting and marking is read has to be connected with object data.
// check challenge ideas and implement
// minor style adjustment is needed

let openModalBtn = document.querySelector('.openModalBtn')
let modal = document.querySelector('.modal')
let closeModal = document.querySelector('.closeModal')
let form = document.querySelector('.form')
const authorInput = form.querySelector('#author')
const titleInput = form.querySelector('#title')
const pagesInput = form.querySelector('#pages')
const readInput = form.querySelector('#read')
const addBookBtn = form.querySelector('.addBookBtn')
const cardContainer = document.querySelector('.container__card')
const card = document.querySelector('.data__card')
const cardEdit = document.querySelector('.card__edit')


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

    myLibrary = []

    // add input value to library object
    constructor() {
        // Attach event handlers to modal 
        openModalBtn.addEventListener('click', this.showModal)
        closeModal.addEventListener('click', this.hideModal)
        addBookBtn.addEventListener('click', this.newBook.bind(this))

        this.deleteData()
    }

    showModal() {
        modal.style.display = "block"
    }
    hideModal() {
        modal.style.display = "none"
        authorInput.value = titleInput.value = pagesInput.value = ''
    }
    deleteData() {

        //In an event, 'this' refers to the element that received the event.

        deleteBtns.forEach(btn => {

            btn.addEventListener('click', function handleClick() {
                console.log('delete item');
            });
        });
    }

    newBook(e) {
        // Prevent default reload of submit
        e.preventDefault()

        // Get data from form
        const authorValue = authorInput.value
        const titleValue = titleInput.value
        const pagesValue = +pagesInput.value
        const readValue = readInput.value //need to work on

        //if one of the input values is empty, alert message
        if (authorValue === '' || titleValue === '' || pagesValue === '') {
            return alert("Please fill in all information")
        }

        let newBook = new NewBook(titleValue, authorValue, pagesValue, readValue)

        this.hideModal()
        this.myLibrary.push(newBook)
        this.renderLibraryCard(newBook)
        // this.deleteData()
    }


    // render new object in the book card
    renderLibraryCard(newBook) {//add input type checkbox
        const containerCard = document.querySelector('.container__card')
        const dataCard = document.createElement('div')
        dataCard.classList.add('data__card')
        containerCard.appendChild(dataCard)
        dataCard.setAttribute('id', newBook.id)

        let html = `    
        <div class="book__details">
         <h2 class="book__title">${newBook.title}</h2>
         <h2 class="book__author">🖊️ by ${newBook.author}</h2>
         <h2 class="book__author">📖 ${newBook.pages} pages</h2>
         <div>
           `;
        dataCard.insertAdjacentHTML('afterbegin', html)

        const cardBtn = document.createElement('div')
        cardBtn.classList.add('card__btn')
        dataCard.appendChild(cardBtn)

        const readBtn = document.createElement('button')
        readBtn.innerHTML = 'To read'
        readBtn.classList.add('card__read')
        readBtn.addEventListener('click', () => {
            if (readBtn.innerHTML === 'Finished') {
                readBtn.innerHTML = 'To read'
                readBtn.classList.remove('read')
                dataCard.classList.remove('isRead')
                readInput.checked = false;
            } else if (readBtn.innerHTML === 'To read') {
                readBtn.innerHTML = 'Finished'
                readBtn.classList.add('read')
                dataCard.classList.add('isRead')
                readInput.checked = true;
            }

        })
        cardBtn.appendChild(readBtn)

        const editBtn = document.createElement('button')
        editBtn.innerHTML = 'Edit'
        editBtn.classList.add('card__edit')
        editBtn.addEventListener('click', () => { console.log('edit') })
        cardBtn.appendChild(editBtn)


        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = 'Delete'
        deleteBtn.classList.add('card__delete')
        deleteBtn.addEventListener('click', (e) => {

            let card = e.target.parentNode.parentNode
            card.parentElement.removeChild(card)
        })
        cardBtn.appendChild(deleteBtn)
    }
}


const app = new App(); // create App object and store data in it



// Challenge ideas
//  books - owned
//  add bookcover photos
//  total pages of books read
//  storage api

