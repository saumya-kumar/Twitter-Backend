import TweetService from "../services/tweet-service.js";

const tweetService = new  TweetService();

const createTweet = async (req,res) => { 
    try {
        const response = await tweetService.create(req.body);
         
        return res.status(201).json({
            success :true,
            message : 'Successfully created a new tweet',
            data:response,
            err :{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success :false,
            message : 'Something went wrong',
            data: {},
            err : error
        })
    }
}


const getTweet = async (req,res) => { 
    try {
        //console.log('req.params.id',req.params.id);
        const response = await tweetService.get(req.params.id);
        console.log('response',response);
        return res.status(201).json({
            success :true,
            message : 'Successfully fetched tweet',
            data:response,
            err :{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success :false,
            message : 'Something went wrong',
            data: {},
            err : error
        })
    }
}



export {
    createTweet,
    getTweet
};
