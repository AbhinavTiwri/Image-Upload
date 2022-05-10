import mongoose from "mongoose";

const employeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please include the product name"],
        maxLength: 50,
    },
    price: {
        type: Number,
        required: [true, "Please include the product price"],
        maxLength: 9,
        validate: {
            validator: function(val) {
                return val.toString().length <= 5
            },
            message: val => `${val.value} has to be 5 digits`
        }
    },

    image: {type:String, required: [true, "Please include the product image"]}
}, {timestamp: true})

const EmployeeModel = mongoose.model('Student', employeSchema)

export default EmployeeModel