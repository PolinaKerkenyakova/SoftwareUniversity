function cars(inputArr) {
    let resultObjects = {};

    const commands = {
        create: (newObjectName, inherit, objToCopy) => {
            let newObj = {};
            if (inherit) {
                newObj = resultObjects[objToCopy];
            }

            resultObjects[newObjectName] = Object.create(newObj);
        },
        set: (objName, property, value) => {
            resultObjects[objName][property] = value;
        },
        print: objName => {
            console.log(printObject(objName));
        },
    }

    inputArr.forEach(line => {
        let [command, ...args] = line.split(' ');
        commands[command](...args)
    });

    function printObject(objName) {
        let output = [];
        for (let el in resultObjects[objName]) {
            output.push(`${el}:${resultObjects[objName][el]}`);
        }
               
        return output.join(', ');
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);