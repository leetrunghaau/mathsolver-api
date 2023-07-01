
const addressRepository = require('../repositories/AddressRepository');

class AddressController {
  async getAddress(req, res) {
    try {
      const { addressId } = req.params;
      console.log(addressId);
      const address = await addressRepository.getAddressById(addressId);
      if (!address) {
        return res.status(404).json({ message: 'Address not found' });
      }
      return res.json(address);
    } catch (error) {
      console.error('Error fetching address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createAddress(req, res) {
    try {
      const addressData = req.body;
      const createdAddress = await addressRepository.createAddress(addressData);
      return res.status(201).json(createdAddress);
    } catch (error) {
      console.error('Error creating address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updateAddress(req, res) {
    try {
      const { addressId } = req.params;
      const addressData = req.body;
      const address = await addressRepository.getAddressById(addressId);
      if (!address) {
        return res.status(404).json({ message: 'Address not found' });
      }
      const updatedAddress = await addressRepository.updateAddress(addressId, addressData);
      return res.json(updatedAddress);
    } catch (error) {
      console.error('Error updating address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async deleteAddress(req, res) {
    try {
      const { addressId } = req.params;
      const address = await addressRepository.getAddressById(addressId);
      if (!address) {
        return res.status(404).json({ message: 'Address not found' });
      }
      await addressRepository.deleteAddress(addressId);
      return res.status(204).json();
    } catch (error) {
      console.error('Error deleting address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = new AddressController();
