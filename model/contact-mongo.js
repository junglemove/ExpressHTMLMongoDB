/**
 * Created by Administrateur on 15/12/2016.
 */
var mongoose = require('mongoose');

var Contact = mongoose.model('contacts',{
   prenom: String,
    nom: String
});

module.exports = Contact;