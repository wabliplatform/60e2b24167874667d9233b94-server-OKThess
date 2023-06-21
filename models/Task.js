
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
Underscoreid:String , 


tname:String , 


ttype:String , 


tperson:String , 


tpriority:String 



})

module.exports = {
  Task : mongoose.model('task', taskSchema),
}

