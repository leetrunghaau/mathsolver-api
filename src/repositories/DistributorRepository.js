// distributorRepository.js

const Distributor = require('../models/Distributor');

class DistributorRepository {
  async getDistributorById(distributorId) {
    return Distributor.findByPk(distributorId);
  }

  async createDistributor(distributorData) {
    return Distributor.create(distributorData);
  }

  async updateDistributor(distributorId, distributorData) {
    await Distributor.update(distributorData, {
      where: { distributor_id: distributorId },
    });
    return this.getDistributorById(distributorId);
  }

  async deleteDistributor(distributorId) {
    return Distributor.destroy({
      where: { distributor_id: distributorId },
    });
  }
}

module.exports = new DistributorRepository();
