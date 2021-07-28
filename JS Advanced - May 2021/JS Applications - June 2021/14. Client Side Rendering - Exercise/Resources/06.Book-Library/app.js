import { render } from './../../node_modules/lit-html/lit-html.js';
import * as api from './httpHelper.js';
import { layoutTemplate } from './templates/allBooksTemplate.js';

const onSubmit = {
    'add-form': onCreateSubmit,
    'edit-form': onEditSubmit,
}

const context = {
    books: [],
    async load() {
        context.books = await api.getAllBooks();
        update();
    },
    onEdit(id) {
        const book = context.books.find(b => b._id === id);
        update(book);
    },
    async onDelete(id) {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await api.deleteBook(id);
        }
    }
}
start();

async function start() {
    update();
}

function update(bookToEdit) {
    render(layoutTemplate(context, bookToEdit), document.body);
}

document.body.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit[e.target.id](formData, e.target);
})

async function onCreateSubmit(formData, form) {
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await api.createBook(book);
    update();
    form.reset();
}

async function onEditSubmit(formData) {
    const id = formData.get('id');

    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    api.updateBook(book, id);
    update();
}