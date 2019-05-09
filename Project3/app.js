// -------------------------------------------------------

console.log("Inicio");
const form = document.querySelector("form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const list = document.querySelector("tr");
form.addEventListener("submit", runEvent);

function runEvent(e) { 

  console.log("Submit");
  let tempTitle = titleInput.value;
  let tempAuthor = authorInput.value;
  let tempIsbn = isbnInput.value;

  const book = new Books(tempTitle,tempAuthor,tempIsbn);
  book.addBook();
  console.log(book);

  e.preventDefault();


  document.getElementById("title").value = ""; 
  document.getElementById("author").value = ""; 
  document.getElementById("isbn").value = ""; 
}

class Books {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
    addBook() {

        let newTask = document.createElement("tr");
        newTask.innerHTML = `
        <td>${this.title}</td>
        <td>${this.author}</td>
        <td>${this.isbn}</td>
        <td></td>`;

        list.appendChild(newTask); 
    }
}

