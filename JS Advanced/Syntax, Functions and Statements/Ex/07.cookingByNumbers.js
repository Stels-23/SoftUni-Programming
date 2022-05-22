function cookingByNumbers(number, command1, command2, command3, command4, command5) {
    let num = Number(number);
    let commands = [command1, command2, command3, command4, command5];
    for (let command of commands) {
        switch (command) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.80;
                break;
        }
        console.log(num);
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('========');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
/*•	chop - divide the number by two
•	dice - square root of a number
•	spice - add 1 to the number
•	bake - multiply number by 3
•	fillet - subtract 20% from number*/
