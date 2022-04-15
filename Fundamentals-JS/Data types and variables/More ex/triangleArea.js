function triangleArea(a, b, c) {
    let p = (a + b + c) / 2; //perimeter
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
    console.log(s);
}
triangleArea(3, 5.5, 4)
    //(2, 3.5, 4);