import express from 'express';
import 'dotenv/config';
import authRoutes from "./routes/auth.route.js";
import cookieParser from 'cookie-parser';
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import { connectDB } from "./config/db.js";  
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
     res.send('Hello World!');
});


app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)

app.listen(port, () => {
     connectDB();
     console.log(`Server is running on port ${port}`)
})