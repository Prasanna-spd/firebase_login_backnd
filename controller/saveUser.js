const {User} = require('../db/schema');

module.exports.saveUser=async (req, res) => {
  try {
    const { name, email, phoneNumber,profilePhoto,coverPhoto,gender,citizen,category } = req.body;
    const newUser = new User({ name, email, phoneNumber,profilePhoto,coverPhoto,gender,citizen,category });
    await newUser.save();
    res.status(200).json({ message: 'User saved successfully', user: newUser  });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Failed to save user' });
  }
}
