function cityTaxes(name, population, treasury) {

    const city = {
        name,
        population: Number(population),
        treasury: Number(treasury),
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population / 100 * percentage);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury / 100 * percentage);
        }
    };

    return city;
}


const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);

const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);