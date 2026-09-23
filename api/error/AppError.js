class AppError extends Error
{
    constructor(message = "Internal Server Error", { status = 500, isOperational = true, details = undefined, data = undefined } = {})
    {
        super(message);
        this.status = status;
        this.isOperational = isOperational;
        this.details = details;
        this.data = data;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;