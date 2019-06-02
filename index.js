const express = require('express')
const app = express()
const port = 4000
const addsRouter = require('./adds/routes')
const cors = require('cors')




const bodyParser = require('body-parser')

app.get('/', (req, res) => res.send('Hello World!'))



app
  .use(cors())
  .use(bodyParser.json())
  .use(addsRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))
