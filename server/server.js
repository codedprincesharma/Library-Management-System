import app from './src/app.js'
import dotenv from 'dotenv'
import connectDb from './src/config/db.js'
const PORT = process.env.PORT || 3000
dotenv.config()
connectDb()








app.listen(PORT, () => {
  console.log(`server start on port number ${PORT}`)
})