const User = require('../models/auth.model');
const expressJwt = require('express-jwt');
const { use } = require('../routes/images');

exports.readController = (req, res) => {
    const userId = req.params.id;
    User.findById(userId).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    });
};

exports.updateController = (req, res) => {
    
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const { name, password,bio,firstname,lastname,address,country,city,zipcode,pic } = req.body;

    User.findOne({ _id: req.user._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        if (!name) {
            return res.status(400).json({
                error: 'Name is required'
            });
        } else {
            user.name = name;
        }

        if (password) {
            if (password.length < 6) {
                return res.status(400).json({
                    error: 'Password should be min 6 characters long'
                });
            } else {
                user.password = password;
            }
        }
        user.bio=bio;
        user.pic=pic;
        user.lastname=lastname;
        user.firstname=firstname;
        user.address=address;
        user.country=country;
        user.city=city;
        user.zipcode=zipcode;

        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};