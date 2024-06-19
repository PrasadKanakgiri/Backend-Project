import {ApiError} from "../utils/ApiError.utils.js"
import {ApiResponse} from "../utils/ApiResponse.utils.js"
import {asyncHandler} from "../utils/asyncHandler.utils.js"


const healthcheck = asyncHandler(async (req, res) => {
    //TODO: build a healthcheck response that simply returns the OK status as json with a message
})

export {
    healthcheck
    }
    