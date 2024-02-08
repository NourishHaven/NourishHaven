const moongoose = require('mongoose');
// const brcybit = require('brcybit');
// const validator = require('validator');

const productSchema = new moongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        rating: {
            type: String,
            required: true,
        },
    //     like: {
    //         type: Boolean,
    //         required:true,
    //  },


    })

    module.exports = productSchema