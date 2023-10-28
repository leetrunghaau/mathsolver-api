const crypto = require('crypto')

const accessTokenSecret = crypto.randomBytes(32).toString('hex');
const generateId = () => {
  const randomBytes = crypto.randomBytes(9).toString('hex');
  const shortenedId = randomBytes.substring(0, 18);
  return shortenedId;
};
function generateCode() {
  const codeLength = 6;
  const min = Math.pow(10, codeLength - 1);
  const max = Math.pow(10, codeLength) - 1;

  const code = Math.floor(Math.random() * (max - min + 1)) + min;

  return String(code).padStart(codeLength, '0');
}
module.exports = {
  accessTokenSecret,
  generateId,
  generateCode,
}