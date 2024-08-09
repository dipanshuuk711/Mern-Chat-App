import User from "../models/userModel.js";

export const getUsersForSideBar = async(req,res)=>{
     try {
          const loggedInUserId = req.user._id;
          const users = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
          res.status(201).json(users);    
     } catch (error) {
          console.log('Problem in getUsersForSidebar controller :', error.message)
          res.status(500).json({ error: "Internal server error" })
     }
}