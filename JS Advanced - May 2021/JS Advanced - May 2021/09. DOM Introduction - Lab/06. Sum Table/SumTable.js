function sumTable() {

    let tr = document.querySelectorAll('tr');
    let sum = 0;

    for (let i = 1; i < tr.length - 1; i++) {
        let currentTr = tr[i];
        let tdCost = currentTr.children[1].textContent;
        sum += Number(tdCost);
    }

    let totalSum = document.querySelector('#sum');
    totalSum.textContent = sum;
}