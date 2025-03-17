const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name: { type: String },
    Email: { type: String, required: true, unique: true },
    PhoneNo: { type: Number },
    DOB: { type: Date },
    Password: { type: String },
    isActive: { type: Boolean, default: true }
})

module.exports = mongoose.model('Users',UserSchema)