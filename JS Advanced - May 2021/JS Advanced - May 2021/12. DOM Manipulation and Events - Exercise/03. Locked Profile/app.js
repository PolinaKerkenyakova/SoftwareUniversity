function lockedProfile() {
    const profileBtns = Array.from(document.querySelectorAll('.profile button'));

    profileBtns.forEach(btn => btn.addEventListener('click', showHide));

    function showHide(e) {
        const button = e.target;
        const profile = button.parentNode;
        const lockUnlockStatus = profile.querySelector('input[type="radio"]:checked').value;
        const additionalInfo = profile.querySelector('div');

        if (lockUnlockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                additionalInfo.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                additionalInfo.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}