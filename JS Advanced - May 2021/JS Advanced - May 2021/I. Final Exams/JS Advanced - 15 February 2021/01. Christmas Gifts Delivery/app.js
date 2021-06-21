function solution() {

    let addField = [...document.querySelectorAll('.card')][0].children[1].children[0];
    let addButton = [...document.querySelectorAll('.card')][0].children[1].children[1];

    // Adding new gift
    addButton.addEventListener('click', (e) => {
        // List of gifts
        let ulGiftList = [...document.querySelectorAll('.card')][1].children[1];

        // Creating new gift li
        let li = document.createElement('li');
        li.textContent = addField.value;
        li.classList.add('gift');

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('id', 'sendButton');
        sendBtn.textContent = 'Send';

        let discardBtn = document.createElement('button');
        discardBtn.setAttribute('id', 'discardButton');
        discardBtn.textContent = 'Discard';

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        // Appending new gift li to the 'List of gifts'
        ulGiftList.appendChild(li);
        addField.value = '';

        // Sorting Gifts List
        [...ulGiftList.querySelectorAll('li')].sort((a, b) => a.textContent.localeCompare(b.textContent) ? 1 : -1)
            .forEach(li => ulGiftList.appendChild(li));


        // Send Button Functionality
        sendBtn.addEventListener('click', (e) => {
            let item = e.target.parentNode;

            // Send gift
            let sendGiftsUl = [...document.querySelectorAll('.card')][2].children[1];
            let newSendItem = document.createElement('li');

            [...item.children].forEach(el => el.remove());
            newSendItem.textContent = item.textContent;
            sendGiftsUl.appendChild(newSendItem);

            item.remove();
        });

        // Discard Button Functionaluity
        discardBtn.addEventListener('click', (e) => {
            let item = e.target.parentNode;

            // Discard gift
            let discardGiftUl = [...document.querySelectorAll('.card')][3].children[1];
            let newDiscardItem = document.createElement('li');

            [...item.children].forEach(el => el.remove());
            newDiscardItem.textContent = item.textContent;
            discardGiftUl.appendChild(newDiscardItem);

            item.remove();
        });
    });
}