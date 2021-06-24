function solution() {

    let addGiftsSection = Array.from(document.querySelectorAll('section'))[0];
    let inputGiftField = addGiftsSection.children[1].children[0];
    let inputGiftButton = addGiftsSection.children[1].children[1];


    let ulListOfGifts = Array.from(document.querySelectorAll('section'))[1].children[1];

    inputGiftButton.addEventListener('click', (e) => {
        // Creating new li
        let li = document.createElement('li');
        li.textContent = inputGiftField.value;
        li.classList.add('gift');

        // Send button
        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.setAttribute('id', 'sendButton');

        li.appendChild(sendButton);

        // Discard button
        let discardButton = document.createElement('button');
        discardButton.textContent = 'Discard';
        discardButton.setAttribute('id', 'discardButton');

        li.appendChild(sendButton);
        li.appendChild(discardButton);

        inputGiftField.value = '';

        //    Appending li to ul

        ulListOfGifts.appendChild(li);

        // Sorting List of Gifts DOES NOT WORK


        // Discard button functionality
        discardButton.addEventListener('click', discardGift);

        // Send button functionality
        sendButton.addEventListener('click', sendGift)
    });

    Array.from(ulListOfGifts.querySelectorAll('li')).sort((a, b) => a.textContent.localeCompare(b.textContent).forEach(li => ulListOfGifts.appendChild(li)));


    function sendGift(e) {
        let item = e.target.parentNode;

        let sendGiftsUl = [...document.querySelectorAll('.card')][2].children[1];
        let newSendItem = document.createElement('li');

        Array.from(item.children).forEach(el => el.remove());
        newSendItem.textContent = item.textContent;
        sendGiftsUl.appendChild(newSendItem);

        item.remove();
    }

    function discardGift(e) {
        let item = e.target.parentNode;

        // Discard gift
        let discardGiftUl = [...document.querySelectorAll('.card')][3].children[1];
        let newDiscardItem = document.createElement('li');

        Array.from(item.children).forEach(el => el.remove());
        newDiscardItem.textContent = item.textContent;
        discardGiftUl.appendChild(newDiscardItem);

        item.remove();
    }
}