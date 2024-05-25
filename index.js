const jsonServer = require('json-server')

//server creation
const videoServer = jsonServer.create()

//connect front with server
const cors = require('cors')
videoServer.use(cors())

// middleware json-js
const mw = jsonServer.defaults()
videoServer.use(mw)

//create router
const router = jsonServer.router('db.json')
videoServer.use(router)

const PORT=5000
videoServer.listen(PORT,()=>{console.log(`video server started at ${PORT}`)})