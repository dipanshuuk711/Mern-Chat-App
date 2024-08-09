import User from "../models/userModel.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import genTokenAndSetCookie from "../utils/genToken.js";

export const signup = async (req, res) => {
     try {
          const { fullName, email, username, password, confirmPassword, gender } = req.body;
          if (confirmPassword !== password) {
               return res.status(400).json({ message: 'Passwords do not matching.' });
          }
          if (!username || !password || !fullName) {
               return res.status(400).json({ message: 'Please provide all the required fields' });
          }
          const user = await User.findOne({ username })
          if (user) {
               return res.status(400).json({ error: "User with this username already exists" });
          }

          const salt = await bcrypt.genSaltSync(10);
          const hashedPassword = await bcrypt.hashSync(password, salt);
          const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
          const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

          const newUser = new User({
               email,
               fullName,
               username,
               password: hashedPassword,
               gender,
               profilePic: gender === 'male' ? maleProfilePic : girlProfilePic
          })

          if (newUser) {
               genTokenAndSetCookie(newUser._id, res);
               await newUser.save();
               res.status(201).json({
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    profilePic: newUser.profilePic,
               })
          }
          else {
               res.status(400).json({ error: "Invalid User Data." })
          }
     } catch (error) {
          console.log(error)
          res.status(500).json({ error: "Some error occured" })
     }
};

export const login = async (req, res) => {
     try {
          const { username, password } = req.body;
          if (!username || !password) {
               return res.status(400).json({ message: 'Please provide all the required fields' });
          }
          const user = await User.findOne({ username })
          if (!user) {
               return res.status(400).json({
                    error: "User with this username doesn't exist"
               })
          }
          const isMatch = await bcrypt.compare(password, user.password );
          if (!isMatch) {
               return res.status(400).json({ error: "Invalid Credentials" })
          }
          genTokenAndSetCookie(user._id, res);
          res.status(200).json({
               _id: user._id,
               fullName: user.fullName,
               username: user.username,
               profilePic: user.profilePic,
          })
     } catch (error) {
          console.log(error)
          res.status(400).json({ error: "Some error Occured" })
     }
};

export const logout = (req, res) => {
     try {
           res.cookie("jwt", '', {maxAge:0})
           res.status(200).json({message:"Logged Out successfully"})
     } catch (error) {
          console.log("Error in Logout Controller", error)
          res.status(400).json({error:"Some Error Occured"})
     }
};