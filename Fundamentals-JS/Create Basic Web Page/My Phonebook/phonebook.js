/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
// Ще го импортира автоматично, когато създадем класа
//имаме си БД, в която се използва нашия модел
let fs = require('fs');
const Contact = require('./models/Contact');
let phonebook = JSON.parse(fs.readFileSync('./data.json'));
//new Contact('Peter', '+359-894-712-532'),
// new Contact('John', '+359-887-246-819')


function getData() {
    return phonebook;
}

function saveContact(name, number) {
    let contact = { name, number };
    phonebook.push(contact);
    fs.writeFileSync('./data.json', JSON.stringify(phonebook))
}
// искаме функциите да са публични
module.exports = {
    getData,
    saveContact
};