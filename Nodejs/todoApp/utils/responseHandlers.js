export const successHandler = (res, statusCode, message, data, count) => {
    return res.status(statusCode).json({
        status: true,
        message: message,
        data: data,
        count: count || null
    })
}

export const errorHandler = (res, statusCode, message, error) => {
    return res.status(statusCode).json({
        status: false,
        message: message,
        error: error
    })
}