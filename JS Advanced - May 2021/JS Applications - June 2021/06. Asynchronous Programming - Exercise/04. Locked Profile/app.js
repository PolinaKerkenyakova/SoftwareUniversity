async function lockedProfile() {
    document.querySelector('#main').innerHTML = '';

    const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    const data = await response.json();

    createProfiles(data);
}

const createProfiles = (data) => {
    const main = document.querySelector('#main');

    Object.values(data).forEach((user, index) => {
        // // Main div
        const div = document.createElement('div');
        div.classList.add('profile')

        // Inside main div
        const img = document.createElement('img');
        img.classList.add('userIcon');
        img.src = 'iconProfile2.png';

        // Lock label + input
        const labelLock = document.createElement('label');
        labelLock.textContent = 'Lock';

        const inputLock = document.createElement('input');
        inputLock.setAttribute('type', 'radio');
        inputLock.setAttribute('value', 'lock');
        inputLock.setAttribute('name', `user${index}Locked`);
        inputLock.setAttribute('checked', '');

        // Unlock label + input
        const lableUnlock = document.createElement('label')
        lableUnlock.textContent = 'Unlock';

        const inputUnlock = document.createElement('input');
        inputUnlock.setAttribute('type', 'radio');
        inputUnlock.setAttribute('value', 'unlock');
        inputUnlock.setAttribute('name', `user${index}Locked`);

        // br + hr
        const br = document.createElement('br');
        const hr = document.createElement('hr');

        // Username
        const labelUsername = document.createElement('label');
        labelUsername.textContent = 'Username';

        const inputUsername = document.createElement('input');
        inputUsername.setAttribute('type', 'text');
        inputUsername.setAttribute('value', user.username);
        inputUsername.setAttribute('name', `user${index}Username`);
        inputUsername.disabled = true;
        inputUsername.readOnly = true;

        const divHidden = document.createElement('div');
        divHidden.setAttribute('id', 'hiddenFields');

        // Email
        const labelEmail = document.createElement('label');
        labelEmail.textContent = 'Email:';

        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('value', user.email);
        inputEmail.setAttribute('name', `user${index}Email`);
        inputEmail.disabled = true;
        inputEmail.readOnly = true;

        // Age
        const labelAge = document.createElement('label');
        labelAge.textContent = 'Age:';

        const inputAge = document.createElement('input');
        inputAge.setAttribute('type', 'number');
        inputAge.setAttribute('value', user.age);
        inputAge.setAttribute('name', `user${index}Age`);
        inputAge.disabled = true;
        inputAge.readOnly = true;

        divHidden.appendChild(hr);
        divHidden.appendChild(labelEmail);
        divHidden.appendChild(inputEmail);
        divHidden.appendChild(labelAge);
        divHidden.appendChild(inputAge);

        // Button
        const button = document.createElement('button');
        button.textContent = 'Show more';

        button.addEventListener('click', showHideInfo)

        div.appendChild(img);
        div.appendChild(labelLock);
        div.appendChild(inputLock);
        div.appendChild(lableUnlock);
        div.appendChild(inputUnlock);
        div.appendChild(br);
        div.appendChild(hr);
        div.appendChild(labelUsername);
        div.appendChild(inputUsername);
        div.appendChild(divHidden);
        div.appendChild(button);

        main.appendChild(div)
    });
}

const showHideInfo = (event) => {
    const button = event.target;
    const currentProfile = button.parentNode;

    let hiddenFields = currentProfile.querySelector('#hiddenFields');
    console.log(hiddenFields);
    const status = currentProfile.querySelector('input[type="radio"]:checked').value;

    if (status === 'unlock') {
        if (button.textContent === 'Show more') {
            hiddenFields.style.display = 'inline-block';
            button.textContent = 'Hide it';
        } else if (button.textContent === 'Hide it') {
            hiddenFields.style.display = 'none';
            button.textContent = 'Show more';
        }
    }
}