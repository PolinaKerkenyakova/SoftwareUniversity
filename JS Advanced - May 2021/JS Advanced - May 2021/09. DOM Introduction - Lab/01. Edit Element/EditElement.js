function editElement(elementReference, match, replacer) {
    let content = elementReference.textContent;
    let matcher = new RegExp(match, 'g');
    let editedContent = content.replace(matcher, replacer);
    elementReference.textContent = editedContent;
}