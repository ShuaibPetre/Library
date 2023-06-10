//ARRAY
let myLibrary = []
class Book {
    constructor(title, author, pages, completed) {
        this.title = title
        this.author = author
        this.pages = pages
        this.completed = completed
        }
}

//ADD BOOK TO ARRAY    
function addbooktolibrary (title, author, pages, completed){  
const book = new Book(title, author, pages, completed);
myLibrary.push(book)
drawBook() 
checkbg()
}
//BUILDING BOOKS
function drawBook(){
const library = document.getElementById('library');
library.replaceChildren()
//LOOP THROUGH LIBRARY
    for (let i = 0; i < myLibrary.length; i += 1) {
        //NEW BOOK DIV
        const bookdiv = document.createElement('div');
        bookdiv.classList.add('book');
        library.appendChild(bookdiv);
        // BOOK TITLE
        const bookTitle = document.createElement('h1');
        bookTitle.classList.add('changecolor')
        bookTitle.textContent = myLibrary[i].title;
        
        bookdiv.appendChild(bookTitle);
        // BOOK AUTHOR
        const bookAuthor = document.createElement('h2');
        bookAuthor.textContent = myLibrary[i].author;
        bookAuthor.classList.add('changecolor')
        bookdiv.appendChild(bookAuthor);
        // BOOK PAGES - CLEANER WITHOUT, CODED FOR PROJECT.
        //const bookPages = document.createElement('p');
        //bookPages.textContent = myLibrary[i].pages;
        //bookdiv.appendChild(bookPages);
        //BOOK CONFIRMATION
        const bookComplete = document.createElement('p');
        bookComplete.textContent = 'Complete:';
        bookComplete.classList.add('readcheckbox')
        bookComplete.classList.add('changecolor')
        bookdiv.appendChild(bookComplete)
        //CHECKBOX - WITH CHECK
        checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("value", "checkbox");
        if (myLibrary[i].completed === true) {
            checkbox.checked = true;
            checkbox.setAttribute("value", "true");
        }
        if (myLibrary[i].completed === false) {
            checkbox.checked = false;
            checkbox.setAttribute("value", "false");
        }
        checkbox.classList.add('switch_1');
        checkbox.addEventListener("click", changebg);
        bookdiv.appendChild(checkbox)
        //DELETE BUTTON
        deletebtn = document.createElement('BUTTON')
        deletebtn.classList.add('delbtn');
        deletebtn.textContent = 'Remove';
        deletebtn.addEventListener("click", deleteBook);
        bookdiv.appendChild(deletebtn);
        checkbg()
    }

}
//FORM SUBMISSION
function submitform() {
    // query selectors
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#pages');
    const checkbox = document.querySelector('#read');
    const form = document.querySelector('form');
    //VALIDATE FORM INPUT
    if (titleInput.value.length === 0 || authorInput.value.length === 0) {
        alert("Please, fill Title AND Author");
        return;
    }
    //CHECKBOX
    if (checkbox.checked) {
        addbooktolibrary(titleInput.value, authorInput.value, pagesInput.value, true);
        } else {
        addbooktolibrary(titleInput.value, authorInput.value, pagesInput.value, false);
        }
        form.reset();
        closemodal();
    }
//TOGGLE READ OR NOT BG
function changebg(event){
    let btn = event.currentTarget
    fieldform = btn.parentNode

    if (event.target.checked === false) {
        fieldform.style.background = 'linear-gradient(135deg, #e3e3e3, #5d6874)'
        const collection = fieldform.getElementsByClassName("changecolor");
        for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = "gray";
        collection[i].style.boxShadow = "0px -1px #5A5A5A";
        collection[i].style.borderTop = "thin solid gray";
    }
} else {
        fieldform.style.background = '-webkit-linear-gradient(left, #559ad4 0%, #559ad4 1%, rgba(255,255,255,0) 3%), -webkit-linear-gradient(-45deg, #52A5EA 0%,#3B8FD6 46%,#2A7DC2 90%,#3E97E4 100%)';
        const collection = fieldform.getElementsByClassName("changecolor");
        for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = "";
        collection[i].style.boxShadow = "";
        collection[i].style.borderTop = ""; 
    }
}}
//CHANGE BG WHEN CARD IS CREATED.
function checkbg() {
    element = document.querySelector('#library');
    child = element.lastElementChild;
    console.log(child)
    check = child.querySelector('.switch_1');
    if (check.value === 'false') {
        child.style.background = 'linear-gradient(135deg, #e3e3e3, #5d6874)'
        const collection = child.getElementsByClassName("changecolor");
        for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = "gray";
        collection[i].style.boxShadow = "0px -1px #5A5A5A";
        collection[i].style.borderTop = "thin solid gray";
    }}
}
//ALL THE BUTTONS
//submit button
submit = document.querySelector('#submit')
submit.addEventListener("click", function(e) {
    e.preventDefault();   
    submitform();
    });
//delete function
function deleteBook(event) {
    child = event.target
    child.parentNode.remove();
    myLibrary.splice(-1);
}
//add book button
addbook = document.querySelector('#addBookbtn')
addbook.addEventListener('click', openmodal)
function openmodal() {
    modal = document.querySelector('.modal').style.display = "flex";
}
//close modal button
closemodalbtn = document.querySelector('.closemodal')
closemodalbtn.addEventListener('click', closemodal)
function closemodal() {
    modal = document.querySelector('.modal').style.display = "none";
}
