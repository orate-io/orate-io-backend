/**
 * @file Contains environment variables.
 */
require('dotenv').config()
/* PORT variable that holds the port being used for the backend.*/
const PORT = process.env.PORT
/* URI received from environmental variables */
const MONGODB_URL = process.env.MONGODB_URL

module.exports = {
  PORT,
  MONGODB_URL
}
