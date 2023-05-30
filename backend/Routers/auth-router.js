const express = require("express");
const authrouter = express.Router();
const User = require("../Models/User");
const { createUserToken } = require("../utils/jwt");




//base url : api/auth/register

authrouter.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    let user=await User.findOne({email:req.body.email});
    if(!user){
        user = await new User({
         ...req.body,
       }).save();

       // Save the user to the database
    }

    const token = createUserToken({
      uid: user.uid,
      _id: user._id,
    });

    return res.status(201).json({ message: "Login Success", accessToken: token });
  } catch (error) {
    return res.status(501).json({ message: error.message, meta: error });
  }
  // res.json({"data":"Working fine..."})
});

//url : api/auth/:id



module.exports = {
  authrouter,
};
