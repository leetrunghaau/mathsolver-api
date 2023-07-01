const crypto =  require('crypto')

const accessTokenSecret = crypto.randomBytes(32).toString('hex');

module.exports = {
    accessTokenSecret
}