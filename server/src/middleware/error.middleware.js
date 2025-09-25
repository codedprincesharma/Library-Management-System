class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Duplicate key error (MongoDB)
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    err = new ErrorHandler(message, 400);
  }

  // JWT Error
  if (err.name === "JsonWebTokenError") {
    const message = "Invalid JSON Web Token, please try again";
    err = new ErrorHandler(message, 400);
  }

  // JWT Expired
  if (err.name === "TokenExpiredError") {
    const message = "JSON Web Token has expired, please login again";
    err = new ErrorHandler(message, 400);
  }

  // Cast Error (Invalid MongoDB ObjectId)
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Validation Error (Mongoose)
  const errorMessage = err.errors
    ? Object.values(err.errors).map(e => e.message).join(", ")
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    message: errorMessage,
  });
};

export default ErrorHandler;
