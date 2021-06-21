class List {
    constructor(list = []) {
        this.list = list;
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(index) {
        if (index > this.size - 1 || index < 0) {
            throw new Error('Index doesn\'t exist');
        } else {
            this.list.splice(index, 1);
            this.size--;
            return;
        }
    }

    get(index) {
        if (index > this.size - 1 || index < 0) {
            throw new Error('Index doesn\'t exist')
        } else {
            return this.list[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));