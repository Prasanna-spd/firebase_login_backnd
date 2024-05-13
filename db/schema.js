const  mongoose =require ("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  profilePhoto: String,
  coverPhoto: String,
  gender: String,
  citizen: String,
  category: String,
});

const User = mongoose.model('User', userSchema);

module.exports={User}