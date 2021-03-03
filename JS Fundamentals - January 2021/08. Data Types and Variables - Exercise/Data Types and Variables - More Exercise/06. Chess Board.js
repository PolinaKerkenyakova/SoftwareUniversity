function chessBoard(number) {

    let color = 'black';

    console.log(`<div class="chessboard">`);
    for (let i = 0; i < number; i++) {
        console.log(`  <div>`);

        for (let j = 0; j < number; j++) {
            console.log(`    <span class="${color}"></span>`);
            if (color === 'black') {
                color = 'white';
            } else if (color === 'white') {
                color = 'black'
            }
        }
        
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}

chessBoard(3)