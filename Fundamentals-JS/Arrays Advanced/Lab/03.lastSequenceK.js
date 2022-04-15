function lastSequenceK(number, k) {
    let sequence = [1];
    for (let i = 1; i < number; i++) { // или ако i = 0; i < number - 1
        let endK = sequence.slice(-k); // взимането на последните к-елементи, т.е., ако к е 2, ще вземе последните 2-елемента
        //ако к е 3, ще вземе последните 3 елемента, ако има само 1-елемент, ще вземе само него
        let sum = 0;
        for (let element of endK) {
            sum += element;

        }
        sequence.push(sum);
    }
    console.log(sequence.join(" "));

}
lastSequenceK(6, 3)
lastSequenceK(8, 2)