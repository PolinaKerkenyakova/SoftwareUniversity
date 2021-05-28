function cookingByNumbers(num, oprOne, oprTwo, oprThree, oprFour, oprFive) {

    num = Number(num);
    let operationsArray = [oprOne, oprTwo, oprThree, oprFour, oprFive];

    const operations = {
        chop() {num = num / 2;},
        dice() {num = Math.sqrt(num);},
        spice() {num += 1; },
        bake() {num *= 3;},
        fillet() {num *= .8;}
    }

    operationsArray.forEach((opr) => {
        operations[opr]();
        console.log(num);
    });
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');