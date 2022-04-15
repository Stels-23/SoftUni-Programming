function cone(r, h) {
    let volume = 1 / 3 * Math.PI * Math.pow(r, 2) * h
    let area = Math.PI * Math.pow(r, 2);
    let s = Math.sqrt((r * r) + (h * h));
    let b = Math.PI * r * s;
    let s1 = area + b;

    console.log(`volume = ${volume.toFixed(4)}`) //.toFixed(4));
    console.log(`area = ${s1.toFixed(4)}`);
}
cone(3.3, 7.8); // (3, 5);