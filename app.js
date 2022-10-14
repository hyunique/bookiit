let myLibrary = [];

function Book(author, title, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new Book("Rebecca Solnit", "A field guide to getting lost", 215, "O")
const book2 = new Book('Tolkien', 'Hobbit', '295', 'X');

function addBookToLibrary(book) {
    myLibrary.push(book);
    return myLibrary;
}

function showBooks() {
    for (let book of myLibrary) {
        console.table(book)
    }
}



let modal = document.querySelector('.modal')
let modalBtn = document.querySelector('.addNewBook')
let closeModal = document.querySelector('.close')

modalBtn.addEventListener('click', function () {
    modal.style.display = 'block'
})

// closeModal.addEventListener('click', function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none"
//     }
// })