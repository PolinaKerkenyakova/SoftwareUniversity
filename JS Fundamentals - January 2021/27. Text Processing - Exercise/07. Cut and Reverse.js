function cutAndReverse(inputString) {

    let half = inputString.length / 2;

    let leftPart = inputString.substr(0, half);
    let rightPart = inputString.substr(half, half);

    console.log(reverseString(leftPart));
    console.log(reverseString(rightPart));

    function reverseString(string) {
        let newString = '';

        for (let i = string.length; i >= 0; i--) {
            newString += string[i];
        }

        return newString;
    }
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');