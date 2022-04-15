function parseCats(asString) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);

        }
    }
    let cats = [];
    for (let catValue of asString) {
        let tokens = catValue.split(' '); // vzima parviq element ot masiva i go razdelq
        let cat = new Cat(tokens[0], Number(tokens[1])); // vijda se obekta ot klasa Cat{name: 'Candy', age: 1}
        cats.push(cat); //[Cat, Cat]
    }
    for (let cat of cats) {
        cat.meow();
    }

}
parseCats(['Mellow 2', 'Tom 5']);
parseCats(['Candy 1', 'Poppy 3', 'Nyx 2']);