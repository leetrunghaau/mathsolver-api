// addressRepository.js

const { where } = require('sequelize');
const Address = require('../models/address-model');

class AddressRepository {
  static async getAddressById(addressId) {
    return Address.findByPk(addressId);
  }
  static async getAddressByUserId(userId) {
    return Address.findOne({
      where: {
        userId: userId,
        status: 'main'
      }
    });
  }
  static async getAllAddressByUserId(userId) {
    return Address.findAll({
      where: {userId : userId}
    });
  }
  static async createAddress(addressData) {
    return Address.create(addressData);
  }

  static async updateAddressById(addressId, addressData) {
    await Address.update(addressData, {
      where: { address_id: addressId },
    });
    return this.getAddressById(addressId);
  }
  static async updateMyAddressById(userId, addressId, addressData) {
    await Address.update(addressData, {
      where: { address_id: addressId, userId: userId},
    });
    return this.getAddressById(addressId);
  }

  static async deleteAddressById(addressId) {
    return Address.destroy({
      where: { address_id: addressId },
    });
  }
  static async deleteMyAddressById(userId, addressId ) {
    return Address.destroy({
      where: { address_id: addressId,userId:userId },
    });
  }
}

module.exports = AddressRepository;
