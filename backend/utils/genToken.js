import jwt from 'jsonwebtoken';

const genTokenAndSetCookie = async (userId, res) => {
     const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
          expiresIn: '7d'
     });

     res.cookie('jwt', token, {
          maxAge: 1000 * 60 * 60 * 24 * 15,
          httpOnly: true,
          sameSite: "strict"
     })
}

export default genTokenAndSetCookie; 