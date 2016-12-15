/**
 * Created by Administrateur on 15/12/2016.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');


var expect = chai.expect();

var app = require('../app'); // si on veut utiliser mongoose, descendre la connection dans app.js