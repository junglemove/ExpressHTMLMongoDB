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
                    expect(res).to.have.status(200);
               })
       });
   });
});