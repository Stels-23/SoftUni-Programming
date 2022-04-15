function sortArray(arr) {
    //let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    let sorted = arr.sort((a, b) => a.length - b.length && a.localeCompare(b.length));
    console.log(sorted.join('\n'));

}
sortArray(['alpha', 'beta', 'gamma']);
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);