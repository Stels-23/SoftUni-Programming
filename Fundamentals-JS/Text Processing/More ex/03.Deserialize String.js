function deseializeStr(input) {
    let letters = [];
    let obj = {};
    let valuesOfIndex = [];
    let deleteEnd = input.pop();
    let inputToStr = input.toString()
    let lastIndexOfInput = Math.max.apply(null, inputToStr.match(/\d+/g));
    lastIndexOfInput++;
    for (let i = 0; i < input.length; i++) {

        let separate = input[i].split(':');
        let word = separate.shift();
        let indexOfWord = separate.toString().split('/').map(Number);

        obj[word] = indexOfWord;

    }
    let keysAndValuesOfObj = Object.entries(obj);
    let valuesOfObj = Object.values(obj);
    let count = 0;
    while (lastIndexOfInput !== count) {
        for (let [key, value] of keysAndValuesOfObj) {

            for (let i = 0; i < value.length; i++) {
                if (value.includes(count)) {
                    valuesOfIndex.push(value[i]);
                    let currentIndex = value.shift();
                    letters.push(key)
                    count++;


                }
                if (!value.includes(count)) {
                    continue;


                }

            }
        }


    }
    console.log(letters.join(''))
}
deseializeStr(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
]);
console.log('========================');
deseializeStr(['a:0/2/4/6',
    'b:1/3/5',
    'end'
])