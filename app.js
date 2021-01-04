//adds the http lib
const { createVerify } = require('crypto')
const http = require('http')
//file handing lib
const fs = require('fs')
const port = 3000

const server = http.createServer(function (req, res) {
  //sends an HTTP status code and collection of response header back to the client. 
  //200 status code means every thing is fine
  //first parameter is where you put your headers which define the parameters of the response. Content-Type header defines the MIME type of the response.
  //second parameter is what MIME type or value for example text/html.
  res.writeHead(200, {'Content-Type': 'text/html'})
  //reads the file
  //takes function with error propery and data argument.
  fs.readFile('index.html', function(error, data) {
    if (error) {
      //404 code means not found
      res.writeHead(404)
      res.write('Error: File Not Found')
    }
    else {
      res.write(data) //list all data in index.html
    }
    res.end()
  })
})

server.listen(port, function(error) {
  if (error) {
    console.log('something went wrong, ' + error)
  } 
  else {
    console.log('Server is listening on port ', + port)
  }
})