function repeatingString(string, num) {
    let res = "";
    for (let i = 0; i < num; i++) {
        res += string
    }
    console.log(res);


}
repeatingString("abc", 3);
repeatingString("String", 2);