const carRouter = require('../cars/cars-router');

const server = express()

sever.use(express.json())
server.use('/api/cars', carRouter)

module.exports = server;