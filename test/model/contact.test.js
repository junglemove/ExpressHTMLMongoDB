/**
 * Created by Administrateur on 15/12/2016.
 */
const assert = require('assert');
const Contact = require('../../model/contact');

describe('class Contact array', function () {
    describe('method find',function () {
        it('should return 2 contacts',function () {
            Contact.find((err, contacts) => {
                assert.equal(contacts.length, 2);
            });
        });
        it('should not contain errors',function (done) { // Mocha done spécific function (make the assert on the callback in auto)
            Contact.find(done); // verify que la callback ne retourn pas d'erreurs
        });
    });


    // Unitaire
    // Tester la méthode findById
    describe('findById',function () {
        it('should return 123 contact',function () {
            Contact.findById(123,(err, contacts) => {
                assert.equal(contacts.length, 1);
                assert.equal(contacts.id, 123);
            });
        });
    });

    // Tester la méthode save
});