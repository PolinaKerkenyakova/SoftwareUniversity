function extractText() {
    const liElements = document.querySelectorAll('#items li');
    const textareaElement = document.querySelector('#result');
    for (let el of liElements) {
        textareaElement.textContent += el.textContent + '\n';
    }
}