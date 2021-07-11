const solve = () => {
    document.querySelector('#btnLoad').addEventListener('click', loadPhonebook);
    document.querySelector('#btnCreate').addEventListener('click', createContact);
}

const loadPhonebook = async () => {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const contacts = await response.json();
    document.querySelector('#phonebook').innerHTML = '';

    const phonebook = document.querySelector('#phonebook')
    Object.entries(contacts).map(createLiElements).forEach(tr => phonebook.appendChild(tr));
}

const createLiElements = ([id, contact]) => {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = contact.person;

    const tdPhone = document.createElement('td');
    tdPhone.textContent = contact.phone;

    const tdDeleteBtn = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', id);
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteContact);
    tdDeleteBtn.appendChild(deleteBtn);

    tr.appendChild(tdName);
    tr.appendChild(tdPhone);
    tr.appendChild(deleteBtn);

    return tr;
}

const createContact = async () => {
    const person = document.querySelector('#person');
    const phone = document.querySelector('#phone');
    const data = { person: person.value, phone: phone.value };

    person.value = '';
    phone.value = '';

    fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: { 'Content-Type': 'aplication/json' },
        body: JSON.stringify(data)
    });

    loadPhonebook();
}

const deleteContact = async (e) => {
    let id = e.target.getAttribute('data-id');

    await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
        method: 'DELETE'
    });

    loadPhonebook();
}

solve();