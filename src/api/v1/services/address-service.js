const AddressRepository = require("../repositories/address-repository");

class AddressService {
    static async getAddressByUserId(userId) {
        const address = await AddressRepository.getAddressByUserId(userId);
        if (!address) {
            return null
        }
        return address;
    }
    static async getListAddressByUserId(userId) {
        const listAddress = await AddressRepository.getListAddressByUserId(userId);
        if (!listAddress) {
            return null;
        }
        return listAddress;
    }
    static async createAddress(){
        
    }
    static async updateAddress(addressData){
        const address = await AddressRepository.updateAddress(addressData);
    }
}
module.exports = AddressService;