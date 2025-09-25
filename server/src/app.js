import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { errorMiddleware } from "./middleware/error.middleware.js"
const app = express()


app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "DELETE", "UPDATE"],
  credentials: true
}))


app.use(cookieParser)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(errorMiddleware)



export default app