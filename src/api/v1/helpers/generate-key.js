const crypto =  require('crypto')

const accessTokenSecret = crypto.randomBytes(32).toString('hex');
const generateId = crypto.randomBytes(9).toString('hex').split(0,18);

module.exports = {
    accessTokenSecret, generateId
}