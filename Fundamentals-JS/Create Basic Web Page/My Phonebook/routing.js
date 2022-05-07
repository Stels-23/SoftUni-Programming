const phonebookController = require('./controllers/phonebook-controller');

module.exports = (app) => {
    app.get('/', phonebookController.index); //На наклонена черта зареди index 
    app.post('/add', phonebookController.addPhonebookPost); //На наклонена черта add зареди addPhonebookPost
};