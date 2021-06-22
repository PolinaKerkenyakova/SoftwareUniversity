function solve() {
    let buttonAdd = document.querySelector('#add');

    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();

        // Get the input fields
        let taskField = document.querySelector('#task');
        let descriptionField = document.querySelector('#description');
        let dateField = document.querySelector('#date');

        let regexText = /(.{1,})/g;
        let dateRegex = /[0-9]{4}.[0-9]{2}.[0-9]{2}/;

        if (taskField.value && descriptionField.value && dateField.value) {

            // Getting the values
            let task = (taskField.value).match(regexText);
            let description = (descriptionField.value).match(regexText);
            let date = (dateField.value).match(dateRegex)[0];

            // Gettinng Open Section
            let openSection = document.querySelector('.wrapper').children[1];
            let mainDiv = openSection.children[1];

            // Creating article
            let article = document.createElement('article');

            let h3 = document.createElement('h3');
            h3.textContent = task;

            let pDescription = document.createElement('p');
            pDescription.textContent = `Description: ${description}`;

            let pDate = document.createElement('p');
            pDate.textContent = `Due Date: ${date}`;

            let divButtons = document.createElement('div');
            divButtons.classList.add('flex');

            let btnStart = document.createElement('button');
            btnStart.textContent = 'Start';
            btnStart.classList.add('green');

            let btnDelete = document.createElement('button');
            btnDelete.textContent = 'Delete';
            btnDelete.classList.add('red')

            // Appending article's children
            divButtons.appendChild(btnStart);
            divButtons.appendChild(btnDelete);

            article.appendChild(h3);
            article.appendChild(pDescription);
            article.appendChild(pDate);
            article.appendChild(divButtons);

            mainDiv.appendChild(article);

            // Adding functionality to the buttons in Open Section
            btnDelete.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.remove();
            });

            btnStart.addEventListener('click', (e) => {
                // Cloning the article and replacing the buttons
                let elements = e.target.parentNode.parentNode;
                let art = elements.cloneNode(true);
                let buttons = art.querySelectorAll('button');
                [...buttons].forEach(btn => {
                    btn.remove();
                });

                let buttonsDiv = art.querySelector('div');

                let btnDelete = document.createElement('button');
                btnDelete.textContent = 'Delete';
                btnDelete.classList.add('red')

                let btnFinish = document.createElement('button');
                btnFinish.textContent = 'Finish';
                btnFinish.classList.add('orange');

                buttonsDiv.appendChild(btnDelete);
                buttonsDiv.appendChild(btnFinish);


                let inProgressDiv = document.querySelector('#in-progress');
                inProgressDiv.appendChild(art);

                elements.remove();


                // Adding functionality to the buttons in 'in Progress' section
                btnDelete.addEventListener('click', (e) => {
                    e.target.parentNode.parentNode.remove();
                });

                btnFinish.addEventListener('click', (e) => {
                    let elements = e.target.parentNode.parentNode;
                    let art = elements.cloneNode(true);
                    let buttonsDiv = art.querySelector('div');
                    buttonsDiv.remove();

                    let completeSection = document.querySelector('.wrapper').children[3];
                    let completeSectionDiv = completeSection.children[1];

                    completeSectionDiv.appendChild(art);
                    elements.remove();
                });
            });
        }
    });
}