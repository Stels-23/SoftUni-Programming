function listOfNames(list) {
    let counter = 0;
    let sorted = list.sort((a, b) => a.localeCompare(b));
    for (let n = 0; n < sorted.length; n++) {
        counter++;
        let currentName = sorted[n];
        console.log(`${counter}.${currentName}`)
    }

}
listOfNames(["John", "Bob", "Christina", "Ema"])