import  express from "express"
const app = express();

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import relationshipRoutes from "./routes/relationships.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

app.use(cors());
app.use(cookieParser());

app.use(express.json())

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/comments",commentRoutes);
app.use("/api/likes",likeRoutes);
app.use("/api/relationships",relationshipRoutes);

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'../client/public/upload')
    },
    filename: function(req,file,cb){
        cb(null,Date.now() + file.originalname)
    }
})

const upload = multer({storage:storage})

app.post('/api/upload',upload.single("file"),(req,res) => {
    const file = req.file;
    res.status(200).json(file.filename);
})

app.listen(8800, () => {
    console.log("server started on port 8800");
})