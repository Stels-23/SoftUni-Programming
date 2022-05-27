function nThEl(arr, n) {
    const result = [];
    for (let i = 0; i < arr.length; i += n) {

        result.push(arr[i]);
    }

    return result;
    //console.log(result)

}
nThEl(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2);
nThEl(['dsa',
        'asd',
        'test',
        'tset'
    ],
    2);
nThEl(['1',
        '2',
        '3',
        '4',
        '5'
    ],
    6);