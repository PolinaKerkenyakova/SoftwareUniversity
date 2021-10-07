function isUser() {
    return (req, res, next) => {
        console.log(res.locals.user)
        if (res.locals.user) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    }
}

function isGuest() {
    return (req, res, next) => {
        if (!res.locals.user) {
            next();
        } else {
            res.redirect('/');
        }
    }
}

module.exports = {
    isUser,
    isGuest
}