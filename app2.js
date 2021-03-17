const http = require('http')    //Pull in a useful node package

const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req, res) => {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table style ="width: 50%>')
      res.write('<tr> <th>Location</th> <th> Number of hours spend</th> <th> Estimated cost</th> </tr>')
      res.write('<tr> <td>ALLEPEY</td> <td> 4HOURS</td> <td> 100$</td> </tr>')
      res.write('<tr> <td>MUNNAR</td> <td> 3HOURS</td> <td> 75$</td> </tr>')
      res.write('<tr> <td>VARKALA</td> <td> 5HOURS</td> <td> 130$</td> </tr>')
      res.write('<tr> <td>COCHIN</td> <td> 7HOURS</td> <td> 200$</td> </tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }
  )

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})