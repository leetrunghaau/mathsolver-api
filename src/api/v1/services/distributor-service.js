const { generateId } = require('../helpers/generate-key');
const DistributorRepository = require('../repositories/distributor-repository')
class DistributorService {
    static async getDistributorById(distributorId) {
        const distributor = await DistributorRepository.getDistributorById(distributorId)
        if (!distributor) {
            return null;
        }
        return distributor;
    }
    static async getAllDistributor(){
        const distributors = await DistributorRepository.getAllDistributor();
        if(distributors.length === 0){
            return null;
        }
        return distributors;
    }
    static async createDistributor(distributorData){
        distributorData.distributorId =  generateId();
        const distributor = await DistributorRepository.createDistributor(distributorData);
        if(!distributor){
            return null;
        }
        return distributor;
    }
    static async updateDistributorById(distributorId, distributorData){
        const distributor = await DistributorRepository.updateDistributorById(distributorId, distributorData);
        if(!distributor){
            return null;
        }
        return distributor;
    }
    static async deleteDistributorById(distributorId){
        const distributor = await DistributorRepository.deleteDistributorById(distributorId);
        if(distributor <=0){
            return null;
        }
        return distributor;
    }
}
module.exports = DistributorService;

