const User = require('../models/user');

const userController= {};

userController.getUsers = async (req, res)=> {
   const user = await User.find()
    res.json(user)
};

userController.createUsers = async (req, res)=> {
    
    const {username} = req.body;

    const newUser = new User({
        username
    })

    await newUser.save();

    res.json({message: 'user created'})
    
};

// Don't forget touse async await 

userController.deleteUsers = async (req, res)=> {
   await  User.findByIdAndDelete(req.params.id)

    res.json({message: 'user deleted'})
};

module.exports = userController;