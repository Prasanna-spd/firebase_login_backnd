const express = require('express');
const router = express.Router();
const {User} = require('../db/schema');

router.get('/user-data', async (req, res) => {
  try {
    const user = await User.findOne({  email: req.query.email });
    console.log(req.query.email)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Failed to fetch user data' });
  }
});

module.exports = router;
   