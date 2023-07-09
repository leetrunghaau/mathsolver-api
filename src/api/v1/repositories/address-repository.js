// addressRepository.js

const { where } = require('sequelize');
const Address = require('../models/address-model');

class AddressRepository {
  static async getAddressById(addressId) {
    return Address.findByPk(addressId);
  }
 static async getAddressByUserId(userId){
  return Address.findOne({
    where: userId = userId,
  });
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
