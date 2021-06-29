function solution() {
    let word = '';

    append = (str) => {
        word += str;
    }

    removeStart = (n) => {
        word = word.slice(n);
    }

    removeEnd = (n) => {
        word = word.slice(0, -n);
    }

    print = () => {
        console.log(word);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();