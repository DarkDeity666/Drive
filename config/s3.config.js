import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";


// s3 client instead of google storage bucket
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export { s3, PutObjectCommand };