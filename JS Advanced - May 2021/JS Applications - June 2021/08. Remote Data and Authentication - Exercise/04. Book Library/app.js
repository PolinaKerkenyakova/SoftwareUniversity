const loadBooks = () => {
    document.querySelector('#loadBooks').addEventListener('click', getAllBooks);
}

// const addBook = () => {
//     document.querySelector('.createForm').addEventListener('submit', createBook);
// }

// const createBook = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);
//     const title = data.get('title');
//     const author = data.get('author');

//     await fetch('http://localhost:3030/jsonstore/collections/books', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             title,
//             author
//         })
//     });

//     e.target.reset();
//     document.querySelector('#books').innerHTML = '';
//     getAllBooks();
// }

const getAllBooks = async () => {
   
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const books = await response.json();
    Object.entries(books).map(renderBook);
}

const renderBook = ([id, book]) => {
    const tr = document.createElement('tr');
    tr.setAttribute('id', id)

    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = book.author;

    const tdTitle = document.createElement('td');
    tdTitle.textContent = book.title;

    const tdButtons = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    editButton.addEventListener('click', editBook);
    deleteButton.addEventListener('click', deleteBook);

    tdButtons.appendChild(editButton);
    tdButtons.appendChild(deleteButton);

    tr.appendChild(tdAuthor);
    tr.appendChild(tdTitle);
    tr.appendChild(tdButtons);

    document.querySelector('#books').appendChild(tr);
}

const editBook = (e) => {
    let id = e.target.parentNode.parentNode.id;

    const createForm = document.querySelector('.createForm');
    const editForm = document.querySelector('.editForm');

    createForm.style.display = 'none';
    editForm.style.display = 'block';

    document.querySelector('#cancelBtn').addEventListener('click', () => {
        createForm.style.display = 'block';
        editForm.style.display = 'none';
    });

    document.querySelector('.editForm button').addEventListener('click', async () => {
        // const response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`);
        // const data = await response.json();

        // const id = e.target.parentNode.parentNode.parentNode.id;
        // const currentTr = e.target.parentNode.parentNode.parentNode;
        // const tds = [...currentTr.children];

        // const title = document.querySelector('.editForm input[name="title"]').value = tds[1].textContent;
        // const author = document.querySelector('.editForm input[name="author"]').value = tds[0].textContent;
        // await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         title,
        //         author
        //     })
        // });

        // editForm.style.display = 'none';
        // createForm.style.display = 'block';
        // document.querySelector('#books').innerHTML = '';
        // getAllBooks();
    });
}

const deleteBook = async (e) => {
    let tr = e.target.parentNode.parentNode;
    fetch(`http://localhost:3030/jsonstore/collections/books/${tr.id}`, {
        method: 'DELETE'
    });

    tr.remove();
}

addBook();
loadBooks();




