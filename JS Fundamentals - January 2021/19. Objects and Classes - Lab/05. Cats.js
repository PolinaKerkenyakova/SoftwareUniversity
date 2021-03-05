function cats(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = [];

    for (let catData of input) {
        let [name, ageText] = catData.split(' ');

        let cat = new Cat(name, Number(ageText));
        cats.push(cat);
    }

    //   for (let cat of cats) {
    //       cat.meow();
    //   }

    cats.forEach((cat) => {
        cat.meow();
    });
}

cats(['Mellow 2', 'Tom 5']);