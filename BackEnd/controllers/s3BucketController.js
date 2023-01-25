const { v4: uuidv4 } = require('uuid');
const aws = require('../node_modules/aws-sdk');

const bucketName = 'awesomebucket777';
const region = 'us-east-1';
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
const accessKeyId = process.env.S3_ACCESS_KEY_ID;
const signatureVersion = 'v4';

const s3 = new aws.S3({
  region,
  secretAccessKey,
  accessKeyId,
  signatureVersion,
});

module.exports.generateUploadURL = async () => {
  const randomFileName = uuidv4();

  const params = {
    Bucket: bucketName,
    Key: randomFileName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
};
