// distributorRepository.js

const Distributor = require('../models/distributor-model');

class DistributorRepository {
  static async getDistributorById(distributorId) {
    return Distributor.findByPk(distributorId);
  }
  static async getAllDistributor() {
    return Distributor.findAll();
  }
  static async createDistributor(distributorData) {
    return Distributor.create(distributorData);
  }

  static async updateDistributorById(distributorId, distributorData) {
    await Distributor.update(distributorData, {
      where: { distributorId: distributorId },
    });
    return this.getDistributorById(distributorId);
  }

  static async deleteDistributorById(distributorId) {
    return Distributor.destroy({
      where: { distributorId: distributorId },
    });
  }
}

module.exports = DistributorRepository;
