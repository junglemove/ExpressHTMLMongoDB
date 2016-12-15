/**
 * Created by Administrateur on 15/12/2016.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
var expect = chai.expect;

var app = require('../app'); // si on veut utiliser mongoose, descendre la connection dans app.js

describe('Tests fonctionnels', function(){
   describe('contact list', function(){
       it('should be accessible', function(){
           chai.request(app)
               .get('/')
               .end((err, res) =>{
                    expect(err).to.be.null;
                    expect(res).to.have.status(200); // idée: parser la réponse (lib externe)
               })
       });
   });
   // Tester la page /contacts/123
    describe('Retrieve id:123 contact', function(){
        it('should be available', function(){
            chai.request(app)
                .get('/contacts/123')
                .end((err, res) =>{
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                })
        });
    });

    // Tester la page POST /contacts/add (chai-http)
    describe('Add un contact', function(){
        it('should return no errors', function(){
            chai.request(app)
                .post('/contacts/add')
                .set('Content-type', 'application/x-www-form-urlencoded')
                .send({ prenom: '123', nom: '123'})
                /*.field('prenom', 'TestP')
                .field('nom', 'TestN')*/
                .end((err, res) =>{
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                });
        });
    });
});