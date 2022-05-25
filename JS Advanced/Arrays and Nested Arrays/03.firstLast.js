function firstLast(numAsStr) {
    const first = [...numAsStr].shift();
    const last = [...numAsStr].pop();
    const result = Number(first) + Number(last);
    console.log(result);
}
firstLast(['20', '30', '40']);
firstLast(['5', '10']);
firstLast(['10'])