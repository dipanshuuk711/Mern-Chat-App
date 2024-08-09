import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const authorized = async (req, res, next) => {
     try {
          const token = req.cookies.jwt;
          if (!token) {
               return res.status(401).json({ error: "Unauthorized" })
          }
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
          if (!decodedToken) {
               return res.status(401).json({ error: "Unauthorized - Invalid Token" })
          }
          const user = await User.findById(decodedToken.userId).select("-password");
          if (!user) {
               return res.status(401).json({ error: "User not found" })
          }
          req.user = user;
          next()
     } catch (error) {
          console.log("Error in the authorized middleware.")
          res.status(500).json({ error: "Internal server error" })
     }
};

export default authorized