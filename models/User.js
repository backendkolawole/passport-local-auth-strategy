const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username : String,
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [3, 'password cannot be less than 3 characters']
    }
})


userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


userSchema.methods.comparePasswords = async function (password) {
    return await bcrypt.compare(password, this.password)
};

module.exports = userSchema