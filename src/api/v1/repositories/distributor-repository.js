// distributorRepository.js

const Distributor = require('../models/distributor-model');

class DistributorRepository {
  static async getDistributorById(distributorId) {
    return Distributor.findByPk(distributorId);
  }

  static async createDistributor(distributorData) {
    return Distributor.create(distributorData);
  }

  static async updateDistributor(distributorId, distributorData) {
    await Distributor.update(distributorData, {
      where: { distributor_id: distributorId },
    });
    return this.getDistributorById(distributorId);
  }

  static async deleteDistributor(distributorId) {
    return Distributor.destroy({
      where: { distributor_id: distributorId },
    });
  }
}

module.exports =  DistributorRepository;
