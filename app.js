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
let openModalBtn = document.querySelector('.openModal')
let modal = document.querySelector('.modal')
let closeModal = document.querySelector('.close')
let form = document.querySelector('.form')
const authorInput = form.querySelector('#author')
const titleInput = form.querySelector('#title')
const pagesInput = form.querySelector('#pages')
const addBookBtn = form.querySelector('.addBook')

function Book(author, title, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    let authorValue = authorInput.value
    let titleValue = titleInput.value
    let pagesValue = pagesInput.value
    let readValue = read.value //need to work on
    const newBook = new Book(authorValue, titleValue, pagesValue, readValue)
    myLibrary.push(newBook);
    return myLibrary
}

function showBooks() {
    for (let book of myLibrary) {
        console.table(book)
    }
}


openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block'
})

addBookBtn.addEventListener('click', () => {
    addBookToLibrary()
})

// closeModal.addEventListener('click', function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none"
//     }
// })