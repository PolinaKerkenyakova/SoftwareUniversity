function pyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let counter = 0;


    for (let i = base; i > 0; i-=2) {
        if (counter % 5 === 0) {
            
        }

        marble += i * i - ((i - 1) * 4);
        stone += (i * i) - marble;
    }
}

pyramidOfKingDjoser(11, 1);
pyramidOfKingDjoser(11, 0.75);
