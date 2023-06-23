import multer from "multer";
import multerS3 from "multer-s3";
import aws from 'aws-sdk';
import { S3 } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';

dotenv.config();

aws.config.update({
    region:process.env.AWS_REGION,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId:process.env.AWS_ACCESS_KEY_ID
});

const s3 = new S3();

const upload = multer({
    storage:multerS3({
        s3:s3,
        bucket:process.env.AWS_BUCKET,
        acl:'public-read',
        metadata:function(req,file,cb){
            cb(null,{fieldname:file.fieldname})
        },
        key:function(req,file,cb){
            cb(null,Date.now().toString());
        }
    })
})

export default upload;