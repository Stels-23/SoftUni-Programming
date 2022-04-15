function meetings(input) {
    let obj = {};
    for (let line of input) {
        let separate = line.split(" ");
        //let dayOfWeek = separate[0];
        //let name = separate[1];
        let [dayOfWeek, name] = separate;
        if (!obj.hasOwnProperty(dayOfWeek)) {
            obj[dayOfWeek] = name;
            console.log(`Scheduled for ${dayOfWeek}`);
        } else {

            console.log(`Conflict on ${dayOfWeek}!`);
        }
    }
    for (let key in obj) { // for(let key of Object.keys(obj))

        console.log(key, "->", obj[key]);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);
console.log("=============");
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);