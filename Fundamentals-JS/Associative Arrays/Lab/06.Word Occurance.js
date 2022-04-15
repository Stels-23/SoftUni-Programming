function wordOccurance(input) {
    let count = 1;
    let obj = {};
    for (let word of input) {
        if (obj.hasOwnProperty(word)) {

            obj[word] += count;

        } else {
            obj[word] = count
        }


    }
    for (let el in obj) {
        console.log(obj.solve(array))
    }

    function solve(array) {
        let max = 0;
        //let count = 1;
        for (let el of array) {
            if (el > max) {
                max = el;
                array.push(max)
            }
            array.push(el);
        }

    }
}

//с Map
function wordOccurrences(arr) {
    let map = new Map();
    let words = 0;
    for (let word of arr) {
        if (!map.has(word)) {
            words = 1;
        } else {
            words = map.get(word) + 1;
        }
        map.set(word, words);
    }
    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);

    for (let [word, words] of sorted) {
        console.log(`${word} -> ${words} times`);
    }
}
//
function wordOccurrences(arr) {
    let map = new Map();
    for (let word of arr) {
        if (!map.has(word)) {
            map.set(word, 0);
        }
        map.set(word, map.get(word) + 1);
    }
    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);
    for (let [word, words] of sorted) {
        console.log(`${word} -> ${words} times`);
    }
}
wordOccurance(["Here", "is", "the", "first",
    "sentence", "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"
])