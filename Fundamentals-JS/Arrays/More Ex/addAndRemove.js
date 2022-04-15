function addAndRemove(input) {
    let arrL = input.length;
    let arr = [];
    let command = "";
    let sum = 0;
    for (let i = 0; i < arrL; i++) {
        command = input[i];
        if (command === 'add') {
            sum = i + 1;
            arr.push(sum)
        } else if (command === 'remove') {

            arr.pop(); // извода е, че не трябва да слагаме параметър, за да изтрива 2-та елемента
        } //pop работи много по-бързо без да се задава параметър

    }
    if (arr.length === 0) {
        console.log("Empty")
    } else {
        console.log(arr.join(" "));
    }
}
//addAndRemove(['add', 'add', 'add', 'add']);
//addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove'])
    // друг вариант на задачата

/*function addAndRemove(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'remove') {
            result.pop();
        } else if (arr[i] === 'add') {
            result.push(i + 1);
        }
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}*/