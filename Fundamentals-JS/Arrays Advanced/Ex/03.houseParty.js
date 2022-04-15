function houseParty(arr) {
    let list = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split(" ");
        // if (element.length === 3) {
        // let removeEl = arr[i].split(',is')
        let name = element[0];
        let command = element[2];

        //console.log(name);
        //console.log(command);
        if (command !== 'not') {
            if (list.includes(name) === true) {
                console.log(`${name} is already in the list!`);
                continue;

            }
            list.push(name);
        } else {
            if (list.includes(name) === false) {
                console.log(`${name} is not in the list!`)

                continue;

            }
            list = list.filter(x => x != name);
        }
    }
    console.log(list.join('\n'))
        //"{name} is going!";
        //"{name} is not going!";

    // }

}
/*      function houseParty(arr) {
          let list = [];
          let guestName = ''

          for (let i = 0; i < arr.length; i++) {
              let line = arr[i].split(" ");
              let name = line[0];
              let command = line[2];
              if (command !== 'not') {
                  if (list.includes(name) === true) {
                      console.log(`${name} is already in the list!`);
                      continue;
                  }
                  list.push(name);
              } else {
                  if (list.includes(name) === false) {
                      console.log(`${name} is not in the list!`);
                      continue;
                  }
                  list = list.filter(x => x != name);
              }
          }
          console.log(list.join('\n'));
      }*/
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);
console.log('----------------------');
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);