function solve() {

    let addBtn = document.querySelector('.form-control button');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Getting the data from the input fields
        let inputs = document.querySelectorAll(".form-control input");
        let lectureInputField = inputs[0]
        let dateInputField = inputs[1];
        let moduleInputField = document.querySelector('.form-control select');

        // Input validation
        if (!lectureInputField.value || !dateInputField.value || moduleInputField.value == "Select module") {
            return;
        }

        // Date refactoring
        let [date, time] = dateInputField.value.split('T');
        date = date.split('-').join('/');

        // Creating new lecture
        let div = document.createElement('div');
        div.classList.add('module');

        let h3 = document.createElement('h3');
        h3.textContent = `${moduleInputField.value.toUpperCase()}-MODULE`;

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.classList.add('flex');

        let h4 = document.createElement('h4');
        h4.textContent = `${lectureInputField.value} - ${date} - ${time}`;

        let delBtn = document.createElement('button');
        delBtn.classList.add('red');
        delBtn.textContent = 'Del';

        delBtn.addEventListener('click', deleteAction)

        // Appending module's children
        li.appendChild(h4);
        li.appendChild(delBtn);

        ul.appendChild(li);

        div.appendChild(h3);
        div.appendChild(ul);

        let modulesH3Headings = document.querySelectorAll('.modules h3');

        let currentModule = Array.from(modulesH3Headings).find(x => x.textContent === h3.textContent);

        if (currentModule) {
            let currentModuleUl = currentModule.parentNode.querySelector('ul');

            currentModuleUl.appendChild(li);

            let currentModuleLis = currentModule.parentNode.querySelectorAll('li');

            let lisArr = [];
            currentModuleLis.forEach(li => {
                lisArr.push(li);
            });
            
            lisArr.sort((a, b) => {
                let datePattern = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/g;
                let [dateA] = a.textContent.match(datePattern);
                let [dateB] = b.textContent.match(datePattern);
                let adate = dateA.split("/").join("-");

                let bdate = dateB.split("/").join("-");

                return adate.localeCompare(bdate);
            });

            lisArr.forEach(li => {
                currentModuleUl.appendChild(li)
            });
        } else {
            let trainingsSection = document.querySelector('.modules');

            trainingsSection.appendChild(div)
        }

        lectureInputField.value = "";
        dateInputField.value = "";
        moduleInputField.value = "";
    });

    function deleteAction(e) {
        let targetLiParent = e.target.parentNode;
        let courseModule = targetLiParent.parentNode;

        targetLiParent.remove();
        if(courseModule.children.length === 0) {
            courseModule.parentNode.remove();
        }
    }
}


