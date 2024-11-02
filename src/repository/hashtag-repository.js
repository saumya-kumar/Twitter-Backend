
import HashTag from '../model/hashtags.js'

class HashtagRepository {

    async create(data){
        try {
            const tag  = await HashTag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data){
        try {
            const tag  = await HashTag.insertMany(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tag  = await HashTag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            const response = await HashTag.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titlelist){
        try {
            const tags  = await HashTag.find({
                title:titlelist
            }) ;
            
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

}

export default HashtagRepository;