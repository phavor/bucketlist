require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// Import other values
const port = process.env.PORT
const uri = process.env.MONGODB_URI

/* Import Bucklist Routes */
const bucketlistRoutes = require('./routes/routes.js')
const docLink = require('./middlewares/docs')

// Set up the App
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Setup connection to the DB */
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log(`Bucketlist has connected to DB successfully...`))
  .catch(error => console.error(`An error occurred while connecting to the DB... ${error}`))

/* Application Directives */
app.use('/api/', docLink)
app.use('/api/v1', bucketlistRoutes)

/* Setup the server and expose the port */
app.listen(port, () => console.log(`Bucketlist has started at http://localhost:${port}`))