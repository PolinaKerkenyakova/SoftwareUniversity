function solution() {
    let addGiftInputField = document.querySelector('section div input[type="text"]');
    let addGiftButton = document.querySelector('section div button');

    addGiftButton.addEventListener('click', (e) => {
        // Creating new li element

        let li = document.createElement('li');
        li.textContent = addGiftInputField.value;
        li.classList.add('gift');

        let operationalLi = li.cloneNode(true);

        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.setAttribute('id', 'sendButton');

        let discardButton = document.createElement('button');
        discardButton.textContent = 'Discard';
        discardButton.setAttribute('id', 'discardButton');

        li.appendChild(sendButton);
        li.appendChild(discardButton);

        addGiftInputField.value = '';

        // Appending the gift to the List of gifts
        let listOfGiftsUl = document.querySelector('.container').children[1].children[1];

        listOfGiftsUl.appendChild(li);

       // Sorting the list of gifts
       Array.from(listOfGiftsUl.children).sort((a, b) => a.textContent.localeCompare(b.textContent))
       .forEach(li => listOfGiftsUl.appendChild(li));

        // Adding buttons functionality
        sendButton.addEventListener('click', (e) => {
            let sentGiftsUl = document.querySelector('.container').children[2].children[1];
            sentGiftsUl.appendChild(operationalLi);
            e.target.parentNode.remove();
        });

        discardButton.addEventListener('click', (e) => {
            let discardGiftsUl = document.querySelector('.container').children[3].children[1];
            discardGiftsUl.appendChild(operationalLi);
            e.target.parentNode.remove();
        });
    });
}