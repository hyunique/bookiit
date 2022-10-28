

let openModalBtn = document.querySelector('.openModalBtn')
let modal = document.querySelector('.modal')
let closeModal = document.querySelector('.closeModal')
let form = document.querySelector('.form')
const authorInput = form.querySelector('#author')
const titleInput = form.querySelector('#title')
const pagesInput = form.querySelector('#pages')
const addBookBtn = form.querySelector('.addBookBtn')

const card = document.querySelector('.data__card')
const cardEdit = document.querySelector('.card__edit')




class NewBook {
    // Create id per object
    id = (Date.now() + '').slice(-10)

    //constructor function to make new object
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    }

}

let deleteBtns = document.querySelectorAll('.card__delete')

class App {

    myLibrary = []

    // add input value to library object
    constructor() {

        // Attach event handlers to modal 
        openModalBtn.addEventListener('click', this.showModal)
        closeModal.addEventListener('click', this.hideModal)
        addBookBtn.addEventListener('click', this.newBook.bind(this))
        // cardEdit.addEventListener('click',)
        this.deleteData()
    }

    showModal() {
        modal.style.display = "block"
    }
    hideModal() {
        modal.style.display = "none"
        authorInput.value = titleInput.value = pagesInput.value = pagesInput.value = ''
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
        const readValue = read.value //need to work on

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

    // addToLibrary() {
    //     this.myLibrary.push(newBook)
    // }

    // render new object in the book card
    renderLibraryCard(newBook) {//add input type checkbox
        const containerCard = document.querySelector('.container__card')
        const dataCard = document.createElement('div')
        dataCard.classList.add('data__card')
        containerCard.appendChild(dataCard)
        dataCard.setAttribute('id', newBook.id)
        let html = `    
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
    `;

        dataCard.insertAdjacentHTML('afterbegin', html)

        const cardBtn = document.createElement('div')
        cardBtn.classList.add('card__btn')
        dataCard.appendChild(cardBtn)

        const editBtn = document.createElement('button')
        editBtn.innerHTML = 'Edit'
        editBtn.classList.add('card__edit')
        editBtn.addEventListener('click', () => { console.log('edit') })
        cardBtn.appendChild(editBtn)

        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = 'Delete'
        deleteBtn.classList.add('card__delete')
        deleteBtn.addEventListener('click', () => { console.log('delete') })
        cardBtn.appendChild(deleteBtn)





    }


}



const app = new App(); // create App object and store data in it


// for (let btn of deleteBtns) {
//     btn.addEventListener('click', () => {
//         console.log('Delete item')
//     })
// }

// Challenge ideas
//  books - owned
//  add bookcover photos
//  total pages of books read
//  storage api

//oct 28 todo: attach delete function to buttons(maybe use forEach), delete item by selecting id(splice or filter or do more research)