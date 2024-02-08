const User = require('../models/userModel')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// TO CREATE A TOKEN FOR ALL USERS
const createToken = () => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '4' })
}

// TO CREATE A USER LOGIN

// exports.login = async (req, res) => {
//     const { email, password } = req.body

//     try {
//         const user = await userModel.login(email, password)
//         // const token = createToken(user._id) 
//         res.status(200).json({
//             email: email,
//             // token: token
//         })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(400).json({
//             Error: err.message
//         })
//     }
    
// }
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        let loadedUser;

        // Check if email exists
        const user = await User.findOne({ email: email });
        if (!user) {
            const error = new Error('A user with this email could not be found');
            error.statusCode = 401;
            throw error;
        }

        loadedUser = user;
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            const error = new Error('Wrong Password');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({
            email: loadedUser.email,
            userId: loadedUser._id.toString(),
        }, 'secretsecret', { expiresIn: '1h' });

        res.status(200).json({ token: token, userId: loadedUser._id.toString(),  messsage: 'Login Successful', });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};


// TO CREATE A USER SIGN UP

// exports.signUpUser = async (req, res) => {
//     const { first_name, last_name, email, state, password } = req.body
//     try {
//         const newUser = await userModel.sign(first_name, last_name, email, state, password)
//         // const token = createToken(user._id)
//         console.log('New User')
//         res.status(200).json({
//             first_name: first_name,
//             last_name: last_name,           
//             email: email,
//             state: state,
//             password: password,
//             // token: token
//         })
       

//     } catch (err) {
//         console.log(err)
//         res.status(400).json({
//             Error: err.message
//         })
//     }
// }

exports.signup = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new Error('Validation Failed');
            error.statusCode = 422;
            error.data = errors.array();
            throw error;
        }
        
        const { first_name, last_name, email, state, password } = req.body;
        const hashedPw = await bcrypt.hash(password, 12);
        
        const user = new User({
            first_name: first_name,
            last_name: last_name,
            state: state,
            email: email,
            password: hashedPw,
        });

        const result = await user.save();

        res.status(200).json({
            messsage: 'New User Created',
            userId: result._id,
            result: result
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};



