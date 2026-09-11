# chai_aur_backend
chai aur backend 


## dotenv 

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.


## npm i mongoose express dotenv  

# Database - 
 The database is always in a different container.
 The database always runs in a separate container.

 # Word Wrap ON - alt + Z

 # process.exit()

 process.exit(1) immediately stops the Node.js program and indicates that the program ended because of an error.

process.exit(0);  -> Success 
process.exit(1);  -> Error/Failure 

# mongoDB -> Database user -> password me @ nhi liya jata hai 

“The password ends here, and the host/server address starts.”
@ is allowed in your password, but because it already has a special meaning in the MongoDB URL, it must be encoded as %40 when placed inside the connection string.

# npm i cors cookie-parser

# CORS = Cross-Origin Resource Sharing

Jab frontend aur backend different origin par run kar rahe hote hain, browser security ke wajah se request ko block kar sakta hai.

CORS: Allows requests from a different origin (frontend) to the backend.

# cookie-parser 

cookie-parser Express ka middleware hai jo incoming request ke cookies ko easily read karne deta hai.

cookie-parser: Helps Express read cookies from incoming requests.

# Middleware:
 A function that runs between the client request and the server response to perform tasks like authentication, logging,admin, CORS, or parsing data.

 # asyncHandler
 . Controller ko run karna aur agar usme error aaye to automatically Express ke error handler tak pahunchana.

 . asyncHandler is a wrapper that automatically catches async errors and passes them to Express's error handler.

 . Promise.resolve() = Handle the result as a Promise.

 . requestHandler() runs the function → Promise.resolve() handles its Promise → .catch() catches errors → next(err) sends the error to Express.

 # promise use
 . Promise is used here so that async errors can be caught and passed to Express using next(err).

 # apierror 
 ApiError ek custom Error class hai jo API error ko statusCode, message, errors, success aur stack ke proper format me store karti hai.

 # apiresponse
 ApiResponse successful API response ko standard format me rakhta hai: statusCode + data + message + success.

 # BSON
 BSON = Binary JSON

MongoDB data ko internally BSON (Binary JSON) format me store karta hai. BSON, JSON jaisa hi hai, lekin usme additional data types hote hain aur data binary representation me store hota hai.

JSON = representation
BSON = MongoDB's binary document format
ObjectId = BSON data type

# npm install aggregation

Aggregation ka simple meaning hai: multiple data/items ko combine karke ek meaningful result banana.

MongoDB me Aggregation
MongoDB me Aggregation Pipeline ka use data ko filter, group, sort, calculate, etc. karne ke liye hota hai.