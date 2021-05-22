function print(inputArray, num) {

    let output = [];
    for (let i = 0; i < inputArray.length; i+=num) {
        output.push(inputArray[i]);
    }

    return output;
}

print(['5', 
'20', 
'31', 
'4', 
'20'], 
2);

print(['dsa',
'asd', 
'test', 
'tset'], 
2);

print(['1', 
'2',
'3', 
'4', 
'5'], 
6);