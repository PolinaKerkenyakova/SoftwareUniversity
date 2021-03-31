function travelTime(input) {

    let destinations = new Map();

    for (let line of input) {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);

        if (!destinations.has(countru)) {
            destinations.set(country, [`${town} -> ${cost}`]);
        } else {
            
        }
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);


    // function travelTime(arr) {
 
    //     let result = {};
     
    //     for (let line of arr) {
     
    //         let [state, town, price] = line.split(" > ").map(x=>x.trim());
     
    //         town = town.charAt(0).toUpperCase() + town.slice(1);
     
    //         if (!result.hasOwnProperty(state)) {
    //             result[state] = {};
    //         }
    //         if (!result[state].hasOwnProperty(town)) {
    //             result[state][town] = Number.POSITIVE_INFINITY;
    //         }
    //         if (result[state].hasOwnProperty(town)) {
    //             if ( result[state][town] > Number(price)) {
    //                 result[state][town] = Number(price);
    //             }
    //         }
    //     }
    //     let sortedStates = Object.keys(result).sort((a, b)=>{
    //         "use strict";
    //         return a.toLowerCase().localeCompare(b.toLowerCase());
    //     });
     
    //     for (let state of sortedStates) {
    //         let innerResult = "";
    //         innerResult += (state + " -> ");
     
    //         let sortedTownsByPrice = Object.keys(result[state]).sort((t1,t2)=>{
    //             "use strict";
    //             return result[state][t1] - result[state][t2];
    //         });
     
    //         for (let obj of sortedTownsByPrice) {
    //             innerResult += (obj + " -> ");
    //             innerResult += (result[state][obj]+ " ");
    //         }
     
    //         console.log(innerResult.trim());
    //     }
    // }




    // function solveTravelTime(input) {
    //     let destinations = {};
     
    //     for (let i = 0; i < input.length; i++) {
    //         let [country, town, price] = input[i].split(" > ").filter(e => e !== "");
    //         price = +price;
    //         town = town[0].toUpperCase() + town.slice(1);
     
    //         if (!destinations.hasOwnProperty(country)) {
    //             destinations[country] = {};
    //         }
    //         if (!destinations[country].hasOwnProperty(town)) {
    //             destinations[country][town] = price;
    //         }
    //         let prevPrice = destinations[country][town];
    //         if (prevPrice > price) {
    //             destinations[country][town] = price;
    //         }
    //     }
     
    //     let orderedCountries = [...Object.keys(destinations)].sort((a,b) => a.localeCompare(b));
    //     let result = "";
    //     for (let country of orderedCountries) {
    //         result += country + " -> ";
    //         let sortedPrices = [...Object.keys(destinations[country])].sort((a, b) => travelCost(a, b, destinations, country));
    //         for (let town of sortedPrices) {
    //             result += `${town} -> ${destinations[country][town]} `;
    //         }
    //         result += "\n";
    //     }
    //     console.log(result);
     
    //     function travelCost(town1, town2, destination, country) {
    //         let priceOne = destination[country][town1];
    //         let priceTwo = destination[country][town2];
     
    //         return priceOne - priceTwo
    //     }
    // }