// const mongoose=require('mongoose')

const validator = require('validator');

const User = (mongoose) => {

    //We have to Make Schema 
    const userSchema = mongoose.Schema({
        _id: Number,
        firstName: String,
        lastName: String,
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: [true, "Please Enter Your email"],
            unique: true,
            validate: [validator.isEmail, 'Invalid email-id format!']

        },
        contactNumber: {
            type: String,
            minLength: [10, 'Invalid contact number!']
        },
        password: {
            type: String,
            required: [true, "Please enter your password"],
            minLength: [6, 'Password must be greater than 6 characters'],
            select: false
        },
        role: {
            type: String,
            default: 'user'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
        //resetPasswordToken:String,
        //   resetPasswordExpire:Date

    }, { timestamp: true });

    const User = mongoose.model("users", userSchema);

    return User;
}

module.exports = User;