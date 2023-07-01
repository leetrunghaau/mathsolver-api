const noAuthMiddleware = (req, res, next) => {

    if (!req.headers.authorization) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};
module.exports = {
    noAuthMiddleware
}