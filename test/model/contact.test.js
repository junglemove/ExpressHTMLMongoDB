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
        it('should not contain errors',function (done) {
            Contact.find(done); // verify que la callback ne retourn pas d'erreurs
        });
    });
});