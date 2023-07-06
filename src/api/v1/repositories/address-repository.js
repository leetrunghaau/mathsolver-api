// addressRepository.js

const Address = require('../models/address-model');

class AddressRepository {
  static async getAddressById(addressId) {

    return Address.findByPk(addressId);

  }

  static async createAddress(addressData) {
    return Address.create(addressData);
  }

  static async updateAddress(addressId, addressData) {
    await Address.update(addressData, {
      where: { address_id: addressId },
    });
    return this.getAddressById(addressId);
  }

  static async deleteAddress(addressId) {
    return Address.destroy({
      where: { address_id: addressId },
    });
  }
}

module.exports = AddressRepository;
