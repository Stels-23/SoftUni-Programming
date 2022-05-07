const phonebook = require('../phonebook');
module.exports = {
    index: (req, res) => {
        // TODO: load index page
        let contacts = phonebook.getData();
        res.render('index', { contacts });
    },
    addPhonebookPost: (req, res) => {
         // TODO: add a phonebook object to the array
        console.log(req.body); 
        phonebook.saveContact(req.body.name, req.body.number);
        res.redirect('/');

       
    }
};
