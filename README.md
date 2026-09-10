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