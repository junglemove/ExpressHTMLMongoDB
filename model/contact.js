const contacts = [{
    prenom: 'Bill',
    nom: 'Gates',
    id: 123
},{
    prenom: 'Steve',
    nom: 'Jobs',
    id: 456
}];

class Contact {
    constructor(contact) {
        this._contact = contact;
    }
    save(cb) {
        process.nextTick(() => {
            this._contact.id = contacts[contacts.length - 1].id + 1;
            contacts.push(this._contact);
            cb(false, this._contact);
        });
    }
    static find(cb) {
        process.nextTick(() => {
            cb(false, contacts);
        });
    }
    static findById(id, cb) {
        process.nextTick(() => {
            let contact = contacts.find(c => c.id === Number(id));
            cb(false, contact);
        });
    }
}

module.exports = Contact;
/*
 Contact.find((err, contacts) => {
    res.render('contacts/list', {contacts});
 });
 */