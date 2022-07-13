import mongoose from "mongoose";
const contactusSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phoneno:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    },
    created_at: { type: Date, default: Date.now },
})
export default mongoose.models.contactus || mongoose.model('contactus',contactusSchema);