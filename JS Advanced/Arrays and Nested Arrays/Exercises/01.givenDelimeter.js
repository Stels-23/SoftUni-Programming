function givenDelimeter(array, symbol) {
    let result = array.join(symbol);
    console.log(result);

}
givenDelimeter(['One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-');
givenDelimeter(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'
    ],
    '_');