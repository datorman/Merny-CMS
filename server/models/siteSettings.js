var mongoose =  require('mongoose');

var SiteSettings = mongoose.model('SiteSettings', {
    domainName:{
        type: String,
    },
    nickname:{
        type: String
    }
});

module.exports = {
    SiteSettings
};