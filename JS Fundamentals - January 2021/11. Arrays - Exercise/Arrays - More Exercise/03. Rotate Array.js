function rotateArray(array) {

    let rotations = array.pop();
    rotations = rotations % array.length;

    for (let i = 0; i < rotations; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']
);
rotateArray(['remove', 'remove', 'remove']);