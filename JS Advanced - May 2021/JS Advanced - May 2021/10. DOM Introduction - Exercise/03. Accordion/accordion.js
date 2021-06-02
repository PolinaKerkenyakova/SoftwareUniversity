function toggle() {
    let button = document.querySelector('.head span');
    let buttonText = button.textContent;

    let textDiv = document.querySelector('#extra');

    if (buttonText === 'More') {
        textDiv.style.display = 'block';
        button.textContent = 'Less';
    }

    if (buttonText === 'Less') {
        textDiv.style.display = 'none';
        button.textContent = 'More';
    }
}