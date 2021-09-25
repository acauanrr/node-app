const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    // req.isAuthenticated() vem do passport
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/users/signin');
};

module.exports = helpers;