
import { HashtagRepository, TweetRepository } from "../repository/index.js";


class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)).map(tag => tag.toLowerCase()); 
        const tweet = await this.tweetRepository.create(data);
        const alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        const titleOfPresentTags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map((tag) => {
            return {title:tag,tweets:[tweet.id] };
        })
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return tweet;
    }

    async get(tweetId){
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        console.log('tweet',tweet);
        return tweet;
    }
}

export default TweetService;


/**
 *   This is my #first #tweet . I am really  #excited
 */

// we have to find the word with starting character '#' and ending character ' '  so we used regular expression to find all those words.