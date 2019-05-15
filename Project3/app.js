// -------------------------------------------------------

console.log("Inicio");

// agregar libro

// const book = new Books();
const ui = new UI();

const form = document.querySelector("form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const list = document.getElementById("book-list");

form.addEventListener("submit", runEvent);

function runEvent(e) { 

  console.log("Submit");
  e.preventDefault();

  let tempTitle = titleInput.value;
  let tempAuthor = authorInput.value;
  let tempIsbn = isbnInput.value;

  if(tempTitle === "" || tempAuthor === "" || tempIsbn === "") {
    console.log("llena los campos");
  }

  else {
    const book = new Books(tempTitle,tempAuthor,tempIsbn);
    ui.addBook(book);
    // console.log(book);  
  }
}

// // borrar libro por libro
// const bodyNode = document.body;
// bodyNode.addEventListener("click", handleEvent);

// function handleEvent(e) {
//     ui.deleteBook();
// }