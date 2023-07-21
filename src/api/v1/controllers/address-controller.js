
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
      console.error('Error fetching address:', error);
      return res.status(500).json({ message: 'Internal server error' });
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
      console.error('Error fetching address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  static async createAddressByUserId(req, res, next) {
    try {
      const { error, value } = createAddressValidate(req.body);
      if (error) {
        return next(createError.BadRequest(error.details[0].message));
      }
      const address = await AddressService.createAddressByUserId(req.userId, value);
      if (!address) {
        return next(createError.InternalServerError());
      }
      return res.status(200).json({
        status: 200,
        message: 'done',
        data: address
      });
    } catch (error) {
      console.error('Error creating address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async updateAddressById(req, res, next) {
    try {
      const { error, value } = updateAddressValidate(req.body);
      if (error) {
        return next(createError.BadRequest(error.details[0].message));
      }
      const { addressId, ...updateData } = value;
      const address = await AddressService.updateAddressById(addressId, updateData);
      if (!address) {
        return next(createError.NotFound('address not found'));
      }
      return res.status(200).json({
        status: 200,
        message: 'done',
        data: address
      })

    } catch (error) {
      console.error('Error updating address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  static async deleteAddressById(req, res, next) {
    try {
      const { error, value } = deleteAddressValidate(req.body);
      if (error) {
        return next(createError.BadRequest(error.details[0].message));
      }
      const address = await AddressService.deleteAddressById(value.addressId);
      if (!address) {
        return next(createError.NotFound('address not found'))
      }
      return res.status(200).json({
        status: 200,
        message: 'done',
      })
    } catch (error) {
      console.error('Error deleting address:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = AddressController;
