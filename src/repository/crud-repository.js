class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud repository layer");
            throw error;
        }
    }

    async destroy(id){
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud repository layer");
            throw error;
        }
    }

    async get(id){
        try {
            console.log(id)
            const result = await this.model.findById(id);
            console.log(result);
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud repository layer");
            throw error;
        }
    }

    async getAll(){
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud repository layer");
            throw error;
        }
    }

    async update(id,data){
        try {
            const result = await this.Model.findByIdAndUpdate(id,data,{new:true});
            return result;
        } catch (error) {
            console.log("Something went wrong in the crud repository layer");
            throw error;
        }
    }
}


export default  CrudRepository;