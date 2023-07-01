// addressDTO.js

class AddressDTO {
    constructor(addressId, district, commune, phone,province, status, detail) {
      this.addressId = addressId,
      this.district = district, 
      this.commune = commune,
      this.phone = phone,
      this.province = province,
      this.status = status,
      this.detail = detail
    }   
  };
  
  module.exports = AddressDTO;
  