const table = document.querySelector('table');

const myLibrary = [];


class Book{
    constructor(title, author, pages, status){
        this.Title = title;
        this.Author = author; 
        this.Pages = pages; 
        if (status == true)
        this.Status = "Finished"; 
        else
        this.Status = "In Progress";
    }
}

const title = document.getElementById('Title');
const author = document.getElementById('Author');
const pages = document.getElementById('Pages');
const progress = document.getElementById('Status');

function addBookToLibrary(){
    if (!title.value || !author.value || !pages.value) {
        alert("Please fill out all required fields.");
        return;
    }
    if (pages.value <=0)
    {
        alert("Pages must be a positive number.");
        return;
    }
    const book = new Book(title.value, author.value, pages.value, progress.checked)
    let newRow = table.insertRow(-1); 
    for (var key in book){
        const cont = newRow.appendChild(document.createElement("td"));
        cont.textContent = book[key]; 
    }

    const optionsBtn = newRow.appendChild(document.createElement("td"));

    const changeStatusBtn = optionsBtn.appendChild(document.createElement("button"));
    changeStatusBtn.textContent = "Finished";
    changeStatusBtn.addEventListener("click", (e) => {
        let status = newRow.cells[newRow.cells.length-1];
        status.textContent = "Finished"; 
    })

    const removeBookBtn = optionsBtn.appendChild(document.createElement("button"));
    removeBookBtn.textContent = "Delete";
    removeBookBtn.addEventListener("click", (e) => {
        table.deleteRow(newRow.rowIndex);
    })
}

