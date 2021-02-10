# Required Packages

- `express`
- `express-session`
- `express-ejs-layouts`
- `connect-flash`
- `passport`
- `passport-local`
- `mongoose`
- `bcrypt`
- `ejs`

# Index.js Route

Create a folder in your project directory called `route`. Inside 
`route`, create a JS file called `index.js`. 

For now `index.js` should look like this

    const express = require('express')
    const router = express.Router()

    // Login Page
    router.get('/', (req, res) => {
        res.render('welcome')
    })

    // Register Page
    router.get('/register', (req, res) => {
        res.render('register')
    })

    module.exports = router
