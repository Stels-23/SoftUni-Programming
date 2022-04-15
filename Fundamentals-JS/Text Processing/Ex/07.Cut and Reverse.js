function cutAndReverse(text) {
    let textL = text.length;
    let firstHalf = text.split('').slice(0, textL / 2);
    let secondHalf = text.split('').slice(textL / 2, textL);
    console.log(firstHalf.reverse().join('')); //reverse работи само с масиви
    console.log(secondHalf.reverse().join(''))
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('=============');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');