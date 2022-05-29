function sortAnArr(list) {
    list.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(list.join('\n'));

}
sortAnArr(['alpha',
    'beta',
    'gamma'
]);
sortAnArr(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);
sortAnArr(['test',
    'Deny',
    'omen',
    'Default'
])