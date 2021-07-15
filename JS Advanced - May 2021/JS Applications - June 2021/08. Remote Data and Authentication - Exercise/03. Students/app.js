document.querySelector('#form').addEventListener('submit', addStudent);

const tBody = document.querySelector('#results tbody');

async function addStudent(e) {
    e.preventDefault();

    try {
        const formData = new FormData(e.target);

        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const facultyNumber = formData.get('facultyNumber');
        const grade = formData.get('grade');

        if (!firstName || !lastName || !facultyNumber || !grade) {
            throw new Error('Please, fill all fields!')
        }

        const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
        });

        const student = await response.json();
        const tr = createStudent(student);
        tBody.appendChild(tr);

        e.target.reset();
    } catch (error) {
        alert(error.message)
    }
}

async function loadAllStudents() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const students = await response.json();

    Object.values(students).map(createStudent).forEach(s => tBody.appendChild(s));
}

loadAllStudents();

function createStudent(student) {
    console.log(student);
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = student.firstName;

    const lastNameTd = document.createElement('td');
    lastNameTd.textContent = student.lastName;

    const facultyNumberTd = document.createElement('td');
    facultyNumberTd.textContent = student.facultyNumber;

    const gradeTd = document.createElement('td');
    gradeTd.textContent = student.grade;

    tr.appendChild(nameTd);
    tr.appendChild(lastNameTd);
    tr.appendChild(facultyNumberTd);
    tr.appendChild(gradeTd);

    return tr;
}