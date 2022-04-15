function bookShelf(input) {
    let shelfList = new Map();
    let bookList = new Map();
    for (let line of input) {
        if (line.includes(' -> ')) {
            let [id, type] = line.split(' -> ');
            if (!shelfList.has(type)) {
                let temp = [...shelfList.values()];
                if (!temp.includes(id)) {
                    shelfList.set(type, id);
                }
            }
        } else if (line.includes(': ')) {
            let [bookTitle, rest] = line.split(': ');
            let [bookAutor, genre] = rest.split(', ');
            let curShelves = [...shelfList.keys()];
            if (curShelves.includes(genre)) {
                if (!bookList.has(genre)) {
                    bookList.set(genre, [
                        { bookTitle, bookAutor },
                    ]);

                } else {
                    let currBookList = bookList.get(genre);
                    currBookList.push({ bookTitle, bookAutor });
                    bookList.set(genre, currBookList)
                }
            }
        }
    }
    [...bookList.entries()]
    .sort((a, b) => b[1].length - a[1].length)
        .forEach((shelf) => {
            let [gener, books] = shelf;
            books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
            console.log(`${shelfList.get(gener)} ${gener}: ${books.length}`);
            for (let book of books) {
                console.log(`--> ${book.bookTitle}: ${book.bookAutor}`);
            }
        });
}

bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);
console.log('================');
bookShelf(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
])