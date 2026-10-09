
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const absolutePath = path.resolve(localFilePath);

        console.log("Uploading:", absolutePath);
        console.log("First 8 bytes:",
            fs.readFileSync(absolutePath).subarray(0, 8).toString("hex")
        );

        const response = await cloudinary.uploader.upload(
            absolutePath,
            { resource_type: "image" }
        );

        console.log("Upload success:", response.secure_url);
        return response;

    } catch (error) {
        console.log("Cloudinary error:", error.message);
        return null;
    }
};

export { uploadCloudinary };