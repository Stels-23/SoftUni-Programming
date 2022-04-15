function wordTracker(input) {
    let obj = {};
    let words = input.shift().split(" ");
    for (let word of words) {
        obj[word] = 0; // да моем да пъхнем думите в обекта
    }

    for (let word of input) {
        if (obj.hasOwnProperty(word)) { // провервя дали думата я има в колекцията
            obj[word] += 1; // или obj[word]++
        }

    }
    let sorted = Object.entries(obj); // трябва да превърнем обекта в масив 
    sorted.sort((a, b) => b[1] - a[1]);
    /* или sorted.sort((a,b)=>{
return b[1] - a[1];
})*/
    //console.log(sorted)
    for (let [word, count] of sorted) {
        console.log(word, "-", count)

    }
}
wordTracker(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to',
    'count', 'the', 'occurances', 'of',
    'the', 'words', 'this', 'and', 'sentence', 'because',
    'this', 'is', 'your', 'task'
]);
console.log("============");
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another',
    'the', 'And', 'finally', 'the', 'the', 'sentence'
])