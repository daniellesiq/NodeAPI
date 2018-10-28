const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CustomerSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
},
phone:{
    type:String,
    default: true,
},
createdAt:{
    type:Date,
    default:Date.now,
}
});

CustomerSchema.plugin(mongoosePaginate);
mongoose.model('Customer', CustomerSchema);