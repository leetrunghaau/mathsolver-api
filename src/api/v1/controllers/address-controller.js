
const AddressRepository = require('../repositories/address-repository');
const AccountService = require('../services/account-service');
const AddressService = require('../services/address-service');
const { changePasswordValidate } = require('../validations/account-validate');
const createError = require('http-errors');
const { createAddressValidate } = require('../validations/address-validate');

class AddressController {
  static async getAddress(req, res, next) {
    try {
      const addressData = await AddressService.getAddressByUserId(req.userId);
      if (!addressData) {
        return next(createError.InternalServerError('find not found !'));
      }
      return res.status(200).json({
        status: 200,
        message: 'done',
        data: addressData
      })
    } catch (error) {
      console.error('Error fetching address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  static async getListAddress(req, res, next) {
    try {
      //kiểm tra xác thực, do middler do
      const listAddress = await AddressService.getListAddressByUserId(req.userId);
      if (!listAddress) {
        return next(createError.InternalServerError('find not found !'));
      }
      return res.status(200).json({
        status: 200,
        message: 'done',
        data: listAddress
      })
    } catch (error) {
      console.error('Error fetching address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  static async createAddress(req, res) {
    try {
      //kiểm tra xác thực
      //kiểm tả validate
      const { error, value } = createAddressValidate(req.body);
      if (error) {
        return next(createError.BadRequest(error.details[0].message));
      }
      //tạo


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

module.exports = AddressController;
