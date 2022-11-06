const { User } = require('../models');

const signUp = (req, res, next) => {
    // Validate request
    if (!req.body.email && !req.body.password) {
        res.status(400).send({ message: "Please provide email and password to continue." });
        return;
    }


    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        name: req.body.firstName + req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        contactNumber: req.body.mobile_number,
        role: req.body.role ? req.body.role : 'user',
    });
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred, please try again later."
            });
        });
}


module.exports = { signUp }





