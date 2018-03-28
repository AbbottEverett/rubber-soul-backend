const model = require('../models');

function signup (req, res, next) {
    let { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
        return next({ status: 400, message: 'Missing signup fields.' });
    }
    return model.users.signup(req.body)
        .then(newUserPayload => {
            return res.status(200).json({ data: newUserPayload });
        })
        .catch(err => {
            console.log(err);
            return next({ status: 401, message: err });
        })
}

function login (req, res, next) {
    let { email, password } = req.body;
    if (!email || !password) {
        return next({ status: 400, message: 'Missing login fields.' });
    }
    return model.users.login(email, password)
        .then(tokenPkg => {
            return res.set('Auth', `Bearer: ${tokenPkg.token}`).send({ message: 'Login Successful', claim: tokenPkg.claim });
        })
        .catch(err => {
            return next({ status: 403, message: err });
        });
}

module.exports = { signup, login };