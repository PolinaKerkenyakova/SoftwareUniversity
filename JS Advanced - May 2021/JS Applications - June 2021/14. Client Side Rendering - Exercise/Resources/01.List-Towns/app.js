import { render } from './../node_modules/lit-html/lit-html.js';
import { renderAllCities } from "./templates/cityTemplate.js";

const rootDiv = document.querySelector('#root');
const form = document.querySelector('form.content');

form.addEventListener('submit', getInputData)

function getInputData(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const citiesString = formData.get('towns');
    const cities = citiesString.split(', ');
    render(renderAllCities(cities), rootDiv);
    form.reset();
}