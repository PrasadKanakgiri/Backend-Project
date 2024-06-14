class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message);  // Call the constructor of the base Error class
        this.statusCode = statusCode;  // HTTP status code (e.g., 404, 500)
        this.data = null;  // Additional data related to the error (optional)
        this.message = message;  // Error message
        this.success = false;  // Success flag, typically false for errors
        this.errors = errors;  // Array of specific error details
        
        // Capture the stack trace, either from the provided stack or from this error instance
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
