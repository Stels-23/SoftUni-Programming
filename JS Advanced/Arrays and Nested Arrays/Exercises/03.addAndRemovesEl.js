function addAndRemoves(input) {
    let arr = [];
    let result = 0;
    for (let index = 0; index < input.length; index++) {
        result++;
        let command = input[index];
        if (command === 'add') {

            arr.push(result);
        } else if (command === 'remove') {
            arr.pop()

        }
    }
    if (arr.length === 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}
addAndRemoves(['add',
    'add',
    'add',
    'add'
]);
addAndRemoves(['add',
    'add',
    'remove',
    'add',
    'add'
]);
addAndRemoves(['remove',
    'remove',
    'remove'
])