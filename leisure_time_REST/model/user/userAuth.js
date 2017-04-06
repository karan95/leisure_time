var uuid = require('uuid');
var nJwt = require('njwt');

exports.checkUserInfo = function(req, res) {
    db.collection('userInfo', function(err, collection) {
        let userData = req.body;
        collection.find().toArray(function(err, users) {
            if (err) {
                res.send("There was a problem in user authentication.");
            } else {
                for (let i = 0; i < users.length; i++) {
                    if (users[i].userName == userData.userName && users[i].password == userData.password) {
                        var secretKey = uuid.v4();
                        var claims = {
                            sub: users[i].userName,
                            iss: 'https://leisuretime.com',
                            permissions: 'upload-review'
                        }
                        var jwt = nJwt.create(claims, secretKey);
                        var token = jwt.compact();
                        let userAuthResponse = {
                            'id': users[i]._id,
                            'userName': users[i].userName,
                            'name': users[i].name,
                            'birthDate': users[i].birthDate,
                            'gender': users[i].gender,
                            'token': token
                        }
                        res.status(200).json(userAuthResponse);
                    } else {
                        res.status(400).json({ "error": "Username or password is incorrect" });
                    }
                }
            }
        });
    });
};