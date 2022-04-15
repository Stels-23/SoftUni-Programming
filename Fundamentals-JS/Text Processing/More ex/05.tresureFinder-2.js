function treasureFinder(arr) {

    let key = arr.shift().split(' ').map(Number);
    let message = arr.shift();
    let typesAndCoordinates = [];

    while (message != 'find') {

        let decryptedMessage = '';
        let counter = 0;

        for (let i = 0; i < message.length; i++) {

            let currCharCode = message[i].charCodeAt();
            currCharCode -= key[counter];
            decryptedMessage += String.fromCharCode(currCharCode);
            counter++;

            if (counter == key.length) {
                counter = 0;
            }
        }
        typesAndCoordinates.push(decryptedMessage);
        message = arr.shift();
    }

    for (let el of typesAndCoordinates) {

        let startOfType = el.indexOf('&') + 1;
        let endOfType = el.lastIndexOf('&');
        let startOfCoordinates = el.indexOf('<') + 1;
        let endOfCoordinates = el.indexOf('>');

        let type = el.slice(startOfType, endOfType);
        let coordinates = el.slice(startOfCoordinates, endOfCoordinates);

        console.log(`Found ${type} at ${coordinates}`);
    }
}