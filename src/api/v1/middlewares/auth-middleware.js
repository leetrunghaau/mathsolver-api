const noAuthMiddleware = (req, res, next) => {

    if (!req.headers.authorization) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};
const userMiddleware = (req, res, next) =>{

};
const adminMiddleware = (req, res, next) =>{

};

module.exports = {
    noAuthMiddleware
}