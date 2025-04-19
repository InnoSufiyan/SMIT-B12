const successHandler = (res, statusCode, message, data, count) => {
    return res.status(statusCode).json({
        status: true,
        message: message,
        data: data,
        count: count || null
    })
}

const errorHandler = (res, statusCode, message, error) => {
    return res.status(statusCode).json({
        status: false,
        message: message,
        error: error
    })
}

export default {successHandler, errorHandler}