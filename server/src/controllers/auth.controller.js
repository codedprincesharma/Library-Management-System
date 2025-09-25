import { catchAsyncError } from '../middleware/catch.asyncError.js'
import { ErrorHandler } from '../middleware/error.middleware.js'
import { user } from '../models/user.model.js'
import bcrypt from 'bcrypt'



export const register = catchAsyncError(async (req, res, next) => {
  try {
    const { name, email, password } = req.body
  } catch (error) {

  }
})