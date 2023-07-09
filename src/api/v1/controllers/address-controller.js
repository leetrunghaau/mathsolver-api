
const AddressRepository = require('../repositories/address-repository');

class AddressController {
  static async getAddress(req, res) {
    try {
      
    } catch (error) {
      console.error('Error fetching address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  static async getListAddress(req, res, next){
    try{

    } catch (error) {
      console.error('Error fetching address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  static async createAddress(req, res) {
    try {
      
      return res.status(201).json(createdAddress);
    } catch (error) {
      console.error('Error creating address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async updateAddress(req, res) {
    try {
      
    } catch (error) {
      console.error('Error updating address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async deleteAddress(req, res) {
    try {
      
    } catch (error) {
      console.error('Error deleting address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports =  AddressController;
