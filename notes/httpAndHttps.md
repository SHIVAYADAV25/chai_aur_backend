## HTTP AND HTTPS

With HTTP, if you send a password, someone intercepting the connection may be able to read it.

With HTTPS, TLS encrypts the communication:

Browser → encrypted data → Server

HTTPS also helps your browser verify that it's communicating with the intended website rather than an impersonator.

In short:
HTTP = communication
HTTPS = communication + encryption + authentication + integrity

For modern websites, HTTPS should almost always be used.

# HTTP header 
HTTP Header = Metadata/information about the request or response.

Request: Headers → tell the server about your request
Response: Headers → tell the browser/client about the response

Header                 Meaning

Host	               Website/server you're requesting
Authorization	       Authentication credentials/token
Content-Type	       Type of data you're sending
Accept	               Type of data you want back
User-Agent	           Information about your browser/client
Cookie	               Sends stored cookies to the server
Cache-Control	       Controls caching behavior

# HTTP Methods
HTTP methods tell the server what action you want to perform on a resource (usually a URL/API endpoint).

Method	       Purpose	                               Example
GET	           Get/read data	                       Get a user's details
POST	       Create/send new data	                   Create a new user
PUT	           Replace/update data completely	       Replace a user's profile
PATCH	       Partially update data	               Change only the user's email
DELETE	       Delete data	                           Delete a user
HEAD	       Get headers without the response body   Check whether a resource exists
OPTIONS        Ask what methods/options are supported	Check allowed methods

# HTTP Status code

. 1xx   Informational    100 -> continue  102 -> processing
. 2xx   success          200 -> ok 201 -> created 202 -> accepted
. 3xx   Redirection      307 -> temporary redirect 308 -> permanent redireact
. 4xx   client error     404 -> not found 402 -> payment required 401-> unauthorized
. 5xx   server error     500 -> internal server error 504-> gateway time out 