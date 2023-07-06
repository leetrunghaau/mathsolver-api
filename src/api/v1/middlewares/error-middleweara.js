const errorMiddleware = async (err, req, res, next) => {
    res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message
    })
}
module.exports = {
    errorMiddleware
}