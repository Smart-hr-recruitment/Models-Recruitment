const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const { emailReg } = require('../utils/regexps');

const { Schema } = mongoose;

const User = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        lowercase: true,
        type: String,
        required: true,
        match: [emailReg, 'Please provide a valid email'],
        unique: true,
    },
    phone: {
        type: Number,
    },

    profilePicture: {
        type: String,
    },
    teamId: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: true,
    },

    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },

}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

User.plugin(idValidator);

module.exports = mongoose.model('User', User);
