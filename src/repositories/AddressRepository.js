// addressRepository.js

const Address = require('../models/Address');

class AddressRepository {
  async getAddressById(addressId) {
    return Address.findByPk(addressId);
    
  }

  async createAddress(addressData) {
    return Address.create(addressData);
  }

  async updateAddress(addressId, addressData) {
    await Address.update(addressData, {
      where: { address_id: addressId },
    });
    return this.getAddressById(addressId);
  }

  async deleteAddress(addressId) {
    return Address.destroy({
      where: { address_id: addressId },
    });
  }
}

module.exports = new AddressRepository();
