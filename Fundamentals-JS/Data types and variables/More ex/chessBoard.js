function chessBoard(n) {
    let counter = 1;
    let currentColor = "black";
    let previosColor = "";
    console.log('<div class="chessboard">');

    while (counter <= n) {
        console.log(' ' + '' + ' <div>');

        for (let row = 1; row <= n; row++) {
            console.log(`     <span class="${currentColor}"></span>`);

            previosColor = currentColor;
            currentColor = previosColor === "black" ? "white" : "black"


        }
        if (n % 2 === 0) {
            previosColor = currentColor;
            currentColor = previosColor === "black" ? "white" : "black";
        }
        counter++;
        console.log('</div>'); //' ' + ' ' + '

    }

    console.log('</div>');
}
chessBoard(6)