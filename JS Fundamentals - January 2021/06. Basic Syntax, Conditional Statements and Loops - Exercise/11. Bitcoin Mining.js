function bitcoinMining(input) {

    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;

    let totalBitcoins = 0;
    let totalMoney = 0;
    let bitcoinBought = 0;
    let arrLength = input.length;
    let day = 0;
    let counter = 0;
    let dayOfFirstBitcoinBought = 0;

    let goldMined = input.shift();
    

    while (arrLength > 0) {
        day++;
        arrLength -= 1;

        if (day % 3 === 0) {
            goldMined *= .7;
        }

        totalMoney += goldMined * goldPrice;

        if (totalMoney >= bitcoinPrice) {
            bitcoinBought = Math.floor(totalMoney / bitcoinPrice)
            counter++;

            totalBitcoins += bitcoinBought;
            totalMoney -= bitcoinBought * bitcoinPrice;

            if (counter === 1) {
                dayOfFirstBitcoinBought = day;
            }
        }

        goldMined = input.shift();
    }
    
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (bitcoinBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoinBought}`);
    }
    
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100,200,300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);