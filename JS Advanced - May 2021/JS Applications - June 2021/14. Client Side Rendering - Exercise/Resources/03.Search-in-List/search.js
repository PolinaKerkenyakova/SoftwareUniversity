import { towns } from './towns.js';
import { render } from './../node_modules/lit-html/lit-html.js'
import { createAllTowns, matchesTemplate } from './templates/townsTemplate.js';

const townsContainer = document.querySelector('#towns');
const baseTowns = towns.map(town => ({ name: town }));
render(createAllTowns(baseTowns), townsContainer);

document.querySelector('#searchBtn').addEventListener('click', search);

function search() {
   const resultContainer = document.querySelector('#result');
   
   const inputValue = document.querySelector('#searchText').value.toLowerCase();
   const allTowns = towns.map(town => ({ name: town }));
   const matchedTowns = allTowns.filter(town => town.name.toLowerCase().includes(inputValue));
   matchedTowns.forEach(town => town.class = 'active');
   console.log(allTowns);

   const matchesCount = matchedTowns.length;
   render(createAllTowns(allTowns), townsContainer);
   render(matchesTemplate(matchesCount), resultContainer);
}