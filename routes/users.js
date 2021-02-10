const express = require('express')
const router = express.Router()
const User = require('../models/user.js')

// Login Handle
router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

// Register Handle
router.post('/register', (req, res) => {
    const {name, email, password, password2} = req.body
    let errors = []
    console.log(' Name ' + name + ' email :' + email + ' pass:' + password)
    if(!name || !email || !password || !password2) {
        errors.push({msg: 'Please fill in All fields'})
    }
    // check if match
    if(password !== password2) {
        errors.push({msg: 'passwords dont match'})
    }

    // check of password is more than 6 characters
    if(password.length < 6) {
        errors.push({msg: 'password at least 6 characters'})
    }

    if(errors.length > 0) {
        res.render('register', {
            errors: errors,
            name: name,
            email: email,
            password: password,
            password2: password2
        })
    }

        else {
            // validation passed
            User.findOne({email : email}).exec((err, user) =>{
                console.log(user)
                if(user) {
                    errors.push({msg: 'user already exists'})
                    render(res, errors, name, email, password, password2)
                }
                else {
                    const newUser = new User({
                        name : name,
                        email : email,
                        password : password
                    })
                }
            })
        }
    })

router.post('/login',(req, res) => {

})

// Logout
router.get('/logout', (req, res) => {

})

module.exports = router