function lockedProfile() {
    let btn = Array.from(document.querySelectorAll('button'));

    btn.forEach(x => x.addEventListener('click', showHide));

    function showHide(event) {
        let button = event.target;
        let profile = button.parentElement;
        let moreInfo = profile.querySelectorAll('div')[0];
        let lockStatus = profile.querySelector('input[type=radio]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInfo.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInfo.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}