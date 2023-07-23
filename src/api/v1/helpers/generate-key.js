const crypto =  require('crypto')

const accessTokenSecret = crypto.randomBytes(32).toString('hex');
const generateId = () => {
    const randomBytes = crypto.randomBytes(9).toString('hex');
    const shortenedId = randomBytes.substring(0, 18);
    return shortenedId;
  };
  function generateCode() {
    const codeLength = 6; 
    const randomBytes = crypto.randomBytes(codeLength); 
    const code = parseInt(randomBytes.toString('hex'), 16); 
    return String(code).padStart(codeLength, '0'); 
  }
module.exports = {
    accessTokenSecret, 
    generateId,
    generateCode,
}