function maxNum(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let isTopInteger = true;

        for (let j = i + 1; j < arr.length; j++) { // да брои следващия елемент
            let nextEl = arr[j];
            if (currentElement <= nextEl) { // проверява 1-я елемент със следващия по ред, дали е по-малък или равен
                isTopInteger = false;
                break;
            }
        }
        if (isTopInteger) {
            newArr.push(currentElement)
        }
    }
    console.log(newArr.join(" "));
}
maxNum([14, 24, 3, 19, 15, 17])
maxNum([41, 41, 34, 20]);
maxNum([27, 19, 42, 2, 13, 45, 48]);