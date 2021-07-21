document.querySelector('#loadBooks').addEventListener('click', loadAllBooks);
document.querySelector('#create-form--js').addEventListener('submit', addNewBook)

let tBody = document.querySelector('#table tbody');

async function loadAllBooks() {
    tBody.querySelectorAll('tr').forEach(tr => tr.remove());
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const books = await response.json();

    Object.entries(books).map(createBook).forEach(b => tBody.appendChild(b));
}

function createBook([id, book]) {
    const tr = document.createElement('tr');
    tr.dataset.id = id;

    const titleTd = document.createElement('td');
    titleTd.textContent = book.title;

    const authorTd = document.createElement('td');
    authorTd.textContent = book.author;

    const buttonsTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editForm);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteBook);

    buttonsTd.appendChild(editBtn);
    buttonsTd.appendChild(deleteBtn);

    tr.appendChild(titleTd);
    tr.appendChild(authorTd);
    tr.appendChild(buttonsTd);

    return tr;
}

async function addNewBook(e) {
    e.preventDefault();

    try {
        const formData = new FormData(e.target);
        const title = formData.get('title');
        const author = formData.get('author');

        if (!title || !author) {
            throw new Error('All fields should be entered!');
        }

        const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author })
        });

        if (response.ok) {
            const book = await response.json();
            const tr = createBook([book._id, book]);
            tBody.appendChild(tr);
        }

        e.target.reset();
    } catch (error) {
        alert(error.message);
    }
}

async function editForm(e) {
    const tr = e.target.closest('tr');
    const id = tr.dataset.id;

    const title = [...tr.querySelectorAll('td')][0].textContent;
    const author = [...tr.querySelectorAll('td')][1].textContent;

    const editForm = document.querySelector('#edit-form--js');
    editForm.style.display = 'block';
    editForm.dataset.id = tr.dataset.id;

    const createForm = document.querySelector('#create-form--js');
    createForm.style.display = 'none';

    const titleInputField = editForm.querySelector('input[name="title"]');
    const authorInputField = editForm.querySelector('input[name="author"]');
    const cancelBtn = editForm.querySelector('#cancel');
    const submitBtn = editForm.querySelector('#submit');

    cancelBtn.addEventListener('click', (event) => {
        event.preventDefault();
        editForm.style.display = 'none';
        createForm.style.display = 'block';
    });

    submitBtn.addEventListener('click', editInformation)

    titleInputField.value = title;
    authorInputField.value = author;
}

async function editInformation(e) {
    e.preventDefault();
    const editForm = e.target.parentNode;
    const id = editForm.dataset.id
    const title = editForm.querySelector('input[name="title"]').value;
    const author = editForm.querySelector('input[name="author"]').value;

    const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author })
    });

    const book = await response.json();
    const editedBook = tBody.querySelector(`tr[data-id="${id}"]`);
    const updatedBook = createBook([id, book]);
    editedBook.replaceWith(updatedBook);
}

async function deleteBook(e) {
    const tr = e.target.closest('tr');
    const id = tr.dataset.id;

    const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        tr.remove();
    }
}