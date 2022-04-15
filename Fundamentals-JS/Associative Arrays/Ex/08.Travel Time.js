/*function travelTime(input) {
    let sortByCountry = (a, b) => a[0].localeCompare(b[0]);
    let sortByPrice = (a, b) => a[1] - b[1];
    let cityParse = e => e.join(' -> ');
    let outputParse = country => `${country[0]} -> ${Object.entries(reduced[country[0]])
        .sort(sortByPrice)
        .map(cityParse)
        .join(' ')}`

    let reduced = input.reduce((a, b) => {
        let [country, city, number] = b.split(' > ');
        if (!a.hasOwnProperty(country)) {
            a[country] = {};
            a[country][city] = Number(number);
        } else {
            if (!a[country].hasOwnProperty(city)) {
                a[country][city] = Number(number);
            } else {
                if (a[country][city] > Number(number)) {
                    a[country][city] = Number(number);
                }
            }
        }
        return a;

    }, {});
    return Object.entries(reduced)
        .sort(sortByCountry)
        .map(outputParse)
        .join('\n')

}
console.log( */
function travelTime(param) {
    let countryList = {}

    for (let dest of param) {
        let [name, city, price] = dest.split(" > ")
        price = Number(price)

        if (!countryList[name]) {
            countryList[name] = {}
        }

        if (!countryList[name][city]) {
            countryList[name][city] = price
        } else {
            countryList[name][city] = Math.min(countryList[name][city], price)
        }

    }

    let arrList = Object.entries(countryList).sort((a, b) => { return a[0].localeCompare(b[0]) })

    for (let country of arrList) {
        let name = country.shift()
        let cityList = Object.entries(country[0]).sort((a, b) => { return a[1] - b[1] })

        let result = []
        for (let city of cityList) {
            result.push(city.join(" -> "))
        }
        console.log(`${name} -> ${result.join(" ")}`);

    }
}

travelTime([
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200",
        "Bulgaria > Sofia > 200",
        "Bulgaria > Sofia > 200",
        "Bulgaria > Sofia > 200"
    ]) //)