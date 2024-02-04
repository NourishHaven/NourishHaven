const mongoose = require("mongoose")
const bcrybit = require("bcrybit")
const validator = require("validator")

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        state: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required:true,
            validate (value) {
                if (this.password) {
                    return validator.islenght (value, 8) && / A-Z /.test(value);
                }
            }
        }
    }
)
    