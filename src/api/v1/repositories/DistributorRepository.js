// distributorRepository.js

const distributor = require('../models/Distributor');

class DistributorRepository {
  static async getDistributorById(distributorId) {
    return distributor.findByPk(distributorId);
  }

  static async createDistributor(distributorData) {
    return distributor.create(distributorData);
  }

  static async updateDistributor(distributorId, distributorData) {
    await distributor.update(distributorData, {
      where: { distributor_id: distributorId },
    });
    return this.getDistributorById(distributorId);
  }

  static async deleteDistributor(distributorId) {
    return distributor.destroy({
      where: { distributor_id: distributorId },
    });
  }
}

module.exports =  DistributorRepository;
