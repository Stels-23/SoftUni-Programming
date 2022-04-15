function wordsTracker(input) {
    let surchCurrentWords = input.shift().split(' ');
    let counter = 0;
    let countWord = {}
    for (let w of surchCurrentWords) {
        countWord[w] = 0;

        for (let word of input) {
            if (word === w) {
                counter++
                countWord[w] = counter;

            }
        }
        counter = 0;
    }
    let sorted = Object.entries(countWord).sort((a, b) => b[1] - a[1]);
    for (let [value, key] of sorted)
        console.log(`${value} - ${key}`)

}
wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
console.log('===============');
wordsTracker(['the is', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])