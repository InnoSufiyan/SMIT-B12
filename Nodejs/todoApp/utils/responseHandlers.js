export const successHandler = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        status: true,
        message: message,
        data: data
    })
}

export const errorHandler = (res, statusCode, message, error) => {
    return res.status(statusCode).json({
        status: false,
        message: message,
        error: error
    })
}