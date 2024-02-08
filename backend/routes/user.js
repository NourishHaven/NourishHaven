// const express = require ("express")
// const router = express.Router();
// const {loginUser, signUpUser} = require('../controller/userController')


// router.post('/login', loginUser)
// router.post('/signup', signUpUser)


// module.exports = router;


const express = require ("express")
const userController = require('../controller/userController')


const router = express.Router();

router.post('/login', userController.login)
router.post('/signup', userController.signup)





module.exports = router;