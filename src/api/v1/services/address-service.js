const { generateId } = require("../helpers/generate-key");
const AddressRepository = require("../repositories/address-repository");

class AddressService {
    static async getAddressById(addressId){
        const address = await AddressRepository.getAddressById(addressId);
        if (!address) {
            return null
        }
        return address;
    }
    static async getAddressByUserId(userId) {
        const address = await AddressRepository.getAddressByUserId(userId);
        if (!address) {
            return null
        }
        return address;
    }
    static async getAllAddressByUserId(userId) {
        const addresses = await AddressRepository.getAllAddressByUserId(userId);
        if (addresses.length === 0) {
            return null;
        }
        return addresses;
    }
    static async createAddressByUserId(userId, addressData) {
        addressData.userId = userId;
        addressData.addressId = generateId();
        const address = await AddressRepository.createAddress(addressData);
        if (!address) {
            return null;
        }
        return address;

    }
    static async updateAddressById(addressId, addressData) {
        const address = await AddressRepository.updateAddressById(addressId, addressData);
        if (!address) {
            return null;
        }
        return address;
    }
    static async updateMyAddressById(userId, addressId, addressData) {
        const address = await AddressRepository.updateMyAddressById(userId,addressId, addressData);
        if (!address) {
            return null;
        }
        return address;
    }
    static async deleteAddressById(addressId) {
        const address = await AddressRepository.deleteAddressById(addressId);
        if (address <= 0) {
            return null;
        }
        return address;
    }
    static async deleteMyAddressById(userId, addressId) {
        const address = await AddressRepository.deleteMyAddressById(userId, addressId);
        if (address <= 0) {
            return null;
        }
        return address;
    }
}
module.exports = AddressService;