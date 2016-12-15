const Router = require('express').Router;
const Contact = require('../model/contact');
const bodyParser = require('body-parser');

let router = new Router();

router.get('/', (req, res, next) => {
    Contact.find((err, contacts) => {
        if (err) {
            return next(err);
        }

        res.render('contacts/list', {contacts});
    });
});

router.get('/:id', (req, res, next) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (err) {
            return next(err);
        }

        if (!contact) {
            req.message = 'Le contact n\'existe pas';
            return next();
        }

        res.render('contacts/show', {contact});
    });
});

router.get('/add', (req, res, next) => {
    res.render('contacts/add');
});

// router.post('/add', )
router.post('/add', bodyParser.urlencoded({ extended: false }), (req, res, next) => {

    var contact = new Contact(req.body);
    contact.save((err, contact) => {
        res.redirect('/contacts/' + contact.id);
    });

});


module.exports = router;