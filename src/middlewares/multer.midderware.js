import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {//cb -> callback function
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    console.log("Incoming filename:", file.originalname);
    console.log("Incoming mimetype:", file.mimetype);
    console.log("Incoming encoding:", file.encoding);
    
      cb(null, file.originalname);
  }
})

export const upload = multer({ storage })


/*
Multer → Node.js/Express me file upload handle karta hai.

diskStorage() → file ko local disk/folder me save karta hai.

destination → file kahan save hogi.

filename → file ka naam kya hoga.

req → request.

file → uploaded file ki information.

cb → callback; cb(null, value) = koi error nahi.


Isliye public/temp ko usually temporary storage ke liye use kiya jata hai. Upload successful hone ke baad local temporary file delete bhi kar sakte ho.

User
  ↓
Multer
  ↓
public/temp/image.jpg
  ↓
Cloudinary upload
  ↓
Cloudinary URL
  ↓
MongoDB

*/