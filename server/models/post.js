var mongoose =  require('mongoose');

var Post = mongoose.model('Post', {
    title:{
        type: String
    }
});

module.exports = {
    Post
};