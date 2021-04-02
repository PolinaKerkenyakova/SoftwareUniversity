function emojiDetector(inputArr) {

    let input = inputArr[0];
    let regex = /(?<emojiSet>([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})\2)/g;
    let allEmojisInText = 0;
    let coolEmojiObj = {};

    while ((validEmoji = regex.exec(input)) !== null) {
        let emoji = validEmoji.groups['emoji'];
        allEmojisInText++;
        let emojiSet = validEmoji.groups['emojiSet']

        let coolPoints = 0;
        for (let char of emoji) {
            let value = char.charCodeAt();
            coolPoints += value;
        }

        coolEmojiObj[emojiSet] = coolPoints;
    }

    let digitRegex = /[0-9]/g;

    let coolNumber = 1
    while ((num = digitRegex.exec(input)) !== null) {
        coolNumber *= Number(num)
    }

    console.log(`Cool threshold: ${coolNumber}`)
    console.log(`${allEmojisInText} emojis found in the text. The cool ones are:`)
    for (let emoji of Object.entries(coolEmojiObj)) {
        if (emoji[1] > coolNumber) {
            console.log(emoji[0]);
        }
    }
}

emojiDetector([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
  ]);

  emojiDetector([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
  ]);

  emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
]);