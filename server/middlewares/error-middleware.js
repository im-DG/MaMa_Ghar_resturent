// const errorMiddleware = (err, req, res, next) => {
//     const status = err.status
//     const message = err.message
//     const extraDetails = err.errorMiddleware
//     return res.status(status).json({ message, extraDetails })
// }
// module.exports = errorMiddleware