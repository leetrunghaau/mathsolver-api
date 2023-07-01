const AccountRepository = require('../repositories/AccountRepository')

class TestController{
   static async testFu(req,res){
        try {
            const { testValue } = req.params;
            console.log(testValue);
            const address = await AccountRepository.getAccountById(testValue);
            if (!address) {
              return res.status(404).json({ message: 't lấy account chứ adress đau' });
            }
            return res.json(address);
          } catch (error) {
            console.error('Error fetching address:', error);
            return res.status(500).json({ message: 'Internal server error' });
          }
    }
}
module.exports = TestController