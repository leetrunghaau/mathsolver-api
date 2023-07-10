const crypto =  require('crypto')

const accessTokenSecret = crypto.randomBytes(32).toString('hex');
const generateId = () => {
    const randomBytes = crypto.randomBytes(9).toString('hex');
    const shortenedId = randomBytes.substring(0, 18);
    return shortenedId;
  };

module.exports = {
    accessTokenSecret, 
    generateId
}