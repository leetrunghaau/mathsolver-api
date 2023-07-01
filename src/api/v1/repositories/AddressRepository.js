// addressRepository.js

const address = require('../models/Address');

class AddressRepository {
  static async getAddressById(addressId) {

    return address.findByPk(addressId);

  }

  static async createAddress(addressData) {
    return address.create(addressData);
  }

  static async updateAddress(addressId, addressData) {
    await address.update(addressData, {
      where: { address_id: addressId },
    });
    return this.getAddressById(addressId);
  }

  static async deleteAddress(addressId) {
    return address.destroy({
      where: { address_id: addressId },
    });
  }
}

module.exports = AddressRepository;
