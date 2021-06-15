function focused() {
    let inputs = Array.from(document.querySelectorAll('div input'));

    inputs.forEach(input => {
        input.addEventListener('focus', gotFocus);
        input.addEventListener('blur', lostBlur);
    });

    function gotFocus(e) {
        let parent = e.currentTarget.parentNode;
        console.log(parent);
        parent.setAttribute('class', 'focused');
    }

    function lostBlur(e) {
        let parent = e.currentTarget.parentNode;
        parent.classList.remove('focused')
    }
}