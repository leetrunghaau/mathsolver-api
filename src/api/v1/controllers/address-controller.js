
const AddressService = require('../services/address-service');
const createError = require('http-errors');
const { createAddressValidate, updateAddressValidate, deleteAddressValidate } = require('../validations/address-validate');

class AddressController {
  static async getAddressByUserId(req, res, next) {
    try {
      const addressData = await AddressService.getAddressByUserId(req.userId);
      if (!addressData) {
        return next(createError.NotFound('Address not found !'));
      }
      return res.status(200).json({
        status: 200,
        message: 'done',
        data: addressData
      })
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async getAllAddressByUserId(req, res, next) {
    try {
      const addresses = await AddressService.getAllAddressByUserId(req.userId);
      if (!addresses) {
        return next(createError.NotFound('addresses not found !'));
      }
      return res.status(200).json({
        status: 200,
        message: 'done',
        data: addresses
      })
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async createAddressByUserId(req, res, next) {
    try {

      const address = await AddressService.createAddressByUserId(req.userId, req.validateData);
      if (!address) {
        return next(createError.InternalServerError());
      }
      return res.status(200).json({
        status: 200,
        message: 'done',
        data: address
      });
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }

  static async updateAddressById(req, res, next) {
    try {

      const { addressId, ...updateData } = req.validateData;
      const address = await AddressService.updateMyAddressById(req.userId, addressId, updateData);
      if (!address) {
        return next(createError.NotFound('address not found'));
      }
      return res.status(200).json({
        status: 200,
        message: 'done',
        data: address
      })

    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
  static async deleteAddressById(req, res, next) {
    try {

      const address = await AddressService.deleteMyAddressById(req.userId, req.validateData.addressId);
      if (!address) {
        return next(createError.NotFound('address not found'))
      }
      return res.status(200).json({
        status: 200,
        message: 'done',
      })
    } catch (error) {
      console.log(error);
      return next(createError.InternalServerError());
    }
  }
}

module.exports = AddressController;
