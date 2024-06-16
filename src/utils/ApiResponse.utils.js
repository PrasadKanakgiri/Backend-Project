class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;  // HTTP status code (e.g., 200 for success, 404 for not found)
        this.data = data;  // The payload/data of the response
        this.message = message;  // A descriptive message (default is "Success")
        this.success = statusCode < 400;  // Boolean indicating if the response is successful (status code < 400)
    }
}

export { ApiResponse };


