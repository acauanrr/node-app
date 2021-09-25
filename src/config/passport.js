const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {

    // Match email's user
    const user = await User.findOne({email});
    if(!user) {
        return done(null, false, { message: 'Not user found'});
    } else {
        // Match Password's User
        const match = await user.matchPassword(password);
        if(match) {
            return done(null, user); //encontrou usuario e senha, esta tudo ok salva na session do server
        } else {
            return done(null, false, {message: 'Incorrect Password'});
        }
    }
}));

// Guarda na sessão do servidor
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Quando está logado verifica se tem autorização
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user)=>{
        done(err, user);
    })
});