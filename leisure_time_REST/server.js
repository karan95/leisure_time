var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var BSON = require('bson').BSONPure;
var router = express.Router();
var mongoDbConfig = require('./model/mongodb');

uuid = require('uuid');
shortid = require('shortid');
nJwt = require('njwt');
Cookies = require('cookies');

var feeds = require('./model/feeds/userFeed');
var ltFeeds = require('./model/feeds/ltFeeds');
var userInfo = require('./model/user/userInfo');
var userAuth = require('./model/user/userAuth');
var userFeedLike = require('./model/user/userFeedService/userFeedLikeService');
var userFeedComment = require('./model/user/userFeedService/userFeedCommentService');
var userFeedShare = require('./model/user/userFeedService/userFeedShareService');
var userFeedRecommend = require('./model/user/userFeedService/userFeedRecommendService');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

// use cors to handle cross Origin Request
// app.use(cors());
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Accept');

    // Set to true if you need the website to include cookies in the requests sent to the API
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// user Info API
app.get('/userInfo', userInfo.getUserInfo);
app.post('/addUserInfo', userInfo.insertUserInfo);
app.patch('/updateUserInfo', userInfo.updateUserInfo);
app.delete('/removeUserInfo', userInfo.deleteUserInfo);

// user Auth API
app.post('/userAuth', userAuth.checkUserInfo);

// lt application feeds API
app.get('/ltFeeds', ltFeeds.getltFeeds);

// user feed API
app.get('/feeds', feeds.getFeeds);
app.post('/addFeed', feeds.insertFeeds);
app.patch('/updateFeeds', feeds.updateFeeds);
app.delete('/removeFeed', feeds.removeFeeds);

// user Feed like, comment, share, recommend API
app.post('/feeds/like', userFeedLike.userFeedLike);
app.post('/feeds/comment', userFeedComment.userFeedComment);
app.post('/feeds/share', userFeedShare.userFeedShare);
app.post('/feeds/recommend', userFeedRecommend.userFeedRecommend);

app.listen(3000);
console.log('Listening on port 3000...');