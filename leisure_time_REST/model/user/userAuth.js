// APT for authenticating user Credentials

exports.checkUserInfo = function(req, res) {
    let userData = req.body;
    db.collection('userInfo', function(err, collection) {
        collection.find().toArray(function(err, users) {
            if (err) {
                return res.send("There was a problem in user authentication.");
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
                        authToken = jwt.compact();
                        let userAuthResponse = {
                            'id': users[i]._id,
                            'userName': users[i].userName,
                            'name': users[i].name,
                            'email': users[i].email,
                            'birthDate': users[i].birthDate,
                            'gender': users[i].gender,
                            'userId': users[i].userId
                        }
                        new Cookies(req, res).set('access_token', authToken, {
                            httpOnly: true,
                            secure: false // for your production environment set true
                        });
                        return res.status(200).json(userAuthResponse);
                    } else {
                        return res.status(401).json({ "error": "Username or password is incorrect" });
                    }
                }
            }
        });
    });
};