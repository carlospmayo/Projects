class UI {  
    constructor() {
        this.book = document.getElementById("book-list");
    } 
    addBook(libro) {

        console.log("addbook");
        let newTask = document.createElement("table");
        newTask.setAttribute("class", "u-full-width");
        newTask.innerHTML = `
        <tr>
        <td>${this.book.title.value}</td>
        <td>${this.book.author}</td> 
        <td>${this.book.isbn}</td>
        <td>x</td>
        </tr>
        `;

        list.appendChild(newTask); 

        document.getElementById("title").value = ""; 
        document.getElementById("author").value = ""; 
        document.getElementById("isbn").value = ""; 
        // console.log(this.Books.title.value); 
    }

    deleteBook() {
        if (e.target.parentElement.classList.contains("delete-item")) {
            console.log("Deleted Book!");
        
            e.target.parentElement.parentElement.remove();
        }
    }
}