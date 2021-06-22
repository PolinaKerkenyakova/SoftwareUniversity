function solve() {
    let formButton = document.querySelector('.form-control button');

    formButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Get form fields
        let lectureNameField = document.querySelector('.form-control input[type="text"]');
        let dateField = document.querySelector('.form-control input[type="datetime-local"]');
        let moduleField = document.querySelector('.form-control select');


        // Regex for data input checking
        let lectureRegex = /[A-Za-z]+/g;
        let dateRegex = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
        let moduleRegex = /^[A-Za-z]+$/g;

        if (lectureRegex.test(lectureNameField.value) && dateRegex.test(dateField.value) && moduleRegex.test(moduleField.value)) {

            let lecture = (lectureNameField.value).match(lectureRegex)[0];
            let date = (dateField.value).match(dateRegex);
            date = date[0].split('-').join('/');
            let module = (moduleField.value).match(moduleRegex)[0];
            let data = [lecture, date, module];

            let isIncluded = false;
            let h3s = [...document.querySelectorAll('.module h3')];
            h3s.forEach(h3 => {
                let text = `${module.toUpperCase()}-MODULE`
                if (h3.textContent === text) {
                    isIncluded = true;
                }
            });

            if (!isIncluded) {
                // Adding new lecture
                let div = document.createElement('div');
                div.classList.add('module');
                let h3 = document.createElement('h3');
                h3.textContent = `${module.toUpperCase()}-MODULE`;

                let ul = document.createElement('ul');
                let li = document.createElement('li');
                li.classList.add('flex');

                let h4 = document.createElement('h4');
                h4.textContent = data.join(' - ');

                let button = document.createElement('button');
                button.classList.add('red');
                button.textContent = 'Del';


                // Appending elements
                li.appendChild(h4);
                li.appendChild(button)

                ul.appendChild(li);
                div.appendChild(h3);
                div.appendChild(ul);

                let modulesClass = document.querySelector('.modules');
                modulesClass.appendChild(div);
            } else {
                let li = document.createElement('li');
                li.classList.add('flex');

                let h4 = document.createElement('h4');
                h4.textContent = data.join(' - ');

                let button = document.createElement('button');
                button.classList.add('red');
                button.textContent = 'Del';

                

            }
        };
    });
};