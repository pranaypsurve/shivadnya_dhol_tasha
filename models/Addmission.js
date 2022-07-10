import mongoose from 'mongoose'
const AddmissionSchema = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    contactno:{
        type:String
    },
    dob:{
        type:String
    },
    landmark:{
        type:String
    },
    address:{
        type:String
    }
     
})
export default mongoose.models.addmission || mongoose.model('addmission',AddmissionSchema)