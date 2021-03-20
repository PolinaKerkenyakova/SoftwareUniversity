function buildWall(inputArr) {

    let input = inputArr.map(Number);
    let dailyConcrete = [];
    let totalConcrete = 0;
    let cost = 0;
    let crews = input.filter(len => len < 30).length;

    while (crews !== 0) {
        let concreteByAllCrews = 0;

        for (let i = 0; i < input.length; i++) {
            if (input[i] !== 30) {
                input[i]++;
                concreteByAllCrews += 195;

                if (input[i] === 30){
                    crews--;
                }
            }
        }

        totalConcrete += concreteByAllCrews;
        dailyConcrete.push(concreteByAllCrews);
    }

    cost = totalConcrete * 1900;
    
    console.log(dailyConcrete. join(', '));
    console.log(`${cost} pesos`);
}

buildWall([21, 25, 28]);
buildWall([17]);
buildWall([17, 22, 17, 19, 17]);