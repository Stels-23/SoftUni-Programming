/*function extractFile(fileDirectory) {
    let tokens = fileDirectory.split('\\');
    //let lastElOfTokens = tokens.length - 1;
    for (let currentEl in tokens) {
        let el = Number(currentEl);
        if (el === tokens.length - 1) {
            let token = tokens[currentEl].split('.');
            console.log(`File name: ${token[0]}`)
            console.log(`File extension: ${token[1]}`)
        }
    }


}*/
function extractFile(fileDirectory) {
    let fileName = fileDirectory.lastIndexOf('\\') + 1; // дава се 1 индекс напред, за да може да се вземе конкретния елемент без наклонка

    let fileExtensions = fileDirectory.lastIndexOf('.') + 1;
    let fileIndexEnd = fileExtensions - 1;
    //console.log(fileIndexEnd)
    let fileNameOfIndex = fileDirectory.substring(fileName, fileIndexEnd);
    //console.log(fileNameOfIndex)
    let fileExtensionOfIndex = fileDirectory.substring(fileExtensions)

    console.log(`File name: ${fileNameOfIndex}`);
    console.log(`File extension: ${fileExtensionOfIndex}`)

}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('=======');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');