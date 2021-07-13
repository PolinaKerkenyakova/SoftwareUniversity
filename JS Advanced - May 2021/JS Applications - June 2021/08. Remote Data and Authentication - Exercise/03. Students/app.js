const addNewStudent = () => {
    document.querySelector('#results tbody').innerHTML = '';
    loadStudents();
    document.querySelector('#form').addEventListener('submit', createNewStudent);
}

const createNewStudent = async (e) => {
    e.preventDefault();

    try {
        const data = new FormData(e.target);
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const facultyNumber = data.get('facultyNumber');
        const grade = data.get('grade');

        if (!data || !firstName || !facultyNumber || !grade) {
            throw new Error('Error');
        }

        const credentials = { firstName, lastName, facultyNumber, grade };
        await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
    } catch {
        alert('Invalid input!')
    }

    document.querySelector('#results tbody').innerHTML = '';
    loadStudents();
    e.target.reset();
}

const loadStudents = async () => {
    let response = await fetch('http://localhost:3030/jsonstore/collections/students');
    let data = await response.json();

    const resulTBody = document.querySelector('#results tbody');
    Object.values(data).map(createTdElements).forEach(tr => resulTBody.appendChild(tr));
}

const createTdElements = (student) => {
    const tr = document.createElement('tr');

    const tdFirstName = document.createElement('td');
    tdFirstName.textContent = student.firstName;

    const tdLastName = document.createElement('td');
    tdLastName.textContent = student.lastName;

    const tdFacultyNumber = document.createElement('td');
    tdFacultyNumber.textContent = student.facultyNumber;

    const tdGrade = document.createElement('td');
    tdGrade.textContent = student.grade;

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdFacultyNumber);
    tr.appendChild(tdGrade);
    return tr;
}

addNewStudent();