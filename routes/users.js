const Router = require('express').Router;
const user = require('../models/user');
const {ensureLoggedIn, ensureCorrectUser} = require('../middleware/auth');
const router = new Router();

router.get('/', ensureLoggedIn, async function (req, res, next){
    try{
        let users = await UserActivation.all();
        return res.json({users});
    }
    catch(err){
        return next(err);
    }
});

router.get('/:username', ensureCorrectUser, async function (req, res, next){
    try{
        let user = await UserActivation.get(req.params.username);
        return res.json({user});
    }
    catch(err){
        return next(err);
    }
});

router.get('/:username/to', ensureCorrectuser, async function (req, res, next){
    try{
        let messages = await User.messagesTo(req.params.username);
        return res.json({messages});
    }
    catch(err){
        return next(err);
    }
});

router.get('/:username/from', ensureCorrectUser, async function(req, res, next){
    try{
        let messages =  await user.messagesFrom(req.params.username);
        return res.json({messages});
    }
    catch(err){
        return next(err);
    }
});

module.exports = router;