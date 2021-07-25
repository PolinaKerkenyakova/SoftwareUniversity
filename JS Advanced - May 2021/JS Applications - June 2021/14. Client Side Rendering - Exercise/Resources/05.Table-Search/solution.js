import { render } from './../node_modules/lit-html/lit-html.js';
import { tableBodyTemplate } from './templates/tableRowTemplate.js';
getData();

let students = [];
const tBody = document.querySelector('.container tbody');

async function getData() {
   const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const dataObj = await response.json();

   students = Object.values(dataObj).map(x => ({
      name: `${x.firstName} ${x.lastName}`,
      course: x.course,
      email: x.email
   }));

   render(tableBodyTemplate(students), tBody);
}

document.querySelector('#searchBtn').addEventListener('click', onClick);

function onClick() {
   const searchInput = document.querySelector('#searchField');
   const searchValue = searchInput.value.toLowerCase();

   const allRowsData = students.map(x => Object.assign({}, x));
   const matchedRows = allRowsData.filter(row => Object.values(row).some(x => x.toLowerCase().includes(searchValue)));
   matchedRows.forEach(r => r.class = 'select');

   searchInput.value = '';
   render(tableBodyTemplate(allRowsData), tBody);
}
