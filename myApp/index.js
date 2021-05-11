const express = require('express')
const app = express()
const port = 3000

/*
Basic routing
Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

app.METHOD(PATH, HANDLER)
Where:

app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.
This tutorial assumes that an instance of express named app is created and the server is running. If you are not familiar with creating an app and starting it, see the Hello world example.

The following examples illustrate defining simple routes.

Respond with Hello World! on the homepage:

app.get('/', function (req, res) {
  res.send('Hello World!')
})
Respond to POST request on the root route (/), the application’s home page:

app.post('/', function (req, res) {
  res.send('Got a POST request')
})
Respond to a PUT request to the /user route:

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
Respond to a DELETE request to the /user route:

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
}) 
*/

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/about", (req, res) => {
    res.status(200).send('Hello World! in about page')
})

app.get("/temp", (req, res) => {
    res.send({//we can also use res.json() to send the jason data, the only advatage is that res.json() will also convert non objects
        //ie, null, undefined but the same is not with the case of res.send()
        id: 1,
        name: "keshav"
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})