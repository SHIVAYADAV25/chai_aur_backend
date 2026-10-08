import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadCloudinary = async (localFilePath) => {
  try {

     const fileStats = fs.statSync(localFilePath);
     console.log("File size:", fileStats.size);

    if(!localFilePath) return null;
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(
      localFilePath,
      {
        resource_type:"image"
      }
    )

    //file has been uploaded successfull
    console.log("file is uploaded on cloudinary",response.url);

    return response;

  } 
  catch (error) {
    console.log("Cloudinary upload error:", error);
    return null;
  }
}


export {uploadCloudinary}