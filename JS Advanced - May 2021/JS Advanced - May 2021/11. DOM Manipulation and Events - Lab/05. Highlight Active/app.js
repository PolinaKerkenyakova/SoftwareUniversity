function focused() {
    let inputs = document.querySelectorAll('div input');

    for (let input of inputs) {
        input.addEventListener('focus', focus);
        input.addEventListener('blur', blur);
    }

    function focus(e) {
        let parent = e.target.parentNode;
        console.log(parent);
        parent.classList.add('focused');
    }

    function blur(e) {
        let parent = e.target.parentNode;
        parent.classList.remove('focused');
    }
}