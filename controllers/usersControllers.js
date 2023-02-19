const User = require('../models/usersModel.js');

exports.findUsers = (req, res) =>{
    const name = req.query.user_name;

    User.getUsers(name, (err, data)=>{
        if(err)
        res.status(500).send({
            message:
                err.message || 'Some error occurred while retrieving users.'
        });
        else res.send(data);
    });
};

exports.findOneUser = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if(err){
            if(err.kind === 'not_found') {
                res.status(400).send({
                    message: `Not found User with id: ${req.params.id}.`
                });
            } else{
                res.status(500).send({
                    message: `Error retrieving User with id: ${req.params.id}.`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.createUser = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: 'Content con not be empty!'
        });
    }
    // create a new object with properties taken from the request
    const user = new User({
        user_name: req.body.user_name, 
        user_surname: req.body.user_surname, 
        user_email: req.body.user_email, 
        user_age: req.body.user_age, 
        user_password: req.body.user_password, 
        });
    // Save User in the database and returns the saved data in a callback funtion 
    Tutorial.postUser(user, (err, data) => {
        if(err) {
            res.status(500).send({
                message: 
                    err.message || 'Some error occurred while creating the User.'
            });
        }
        else {
            res.send(data);
        }
    });
};

exports.updateUser = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: 'Body cannot be empty.'
        });
    }
    console.log(req.body);

    User.putUser(req.body.id, new User(req.body), (err, data) => {
        if(err) {
            if(err.kind === 'not_found') {
                res.status(400).send({
                    message: `Not found user with id:${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: `Error updating user with id:${req.params.id}.`
                })
            }
        } else {
            res.send(data);
        }
    })
}

exports.deleteOneUser = (req, res) => {
    User.deleteById(req.params.id, (err, data) => {
        if(err) {
            if(err.kind === 'not_found') {
                res.status(400).send({
                    message: `Not found user with id: ${req.params.id}.`
                });
            } else{
                res.status(500).send({
                    message: `Could not delete id with ${req.params.id}.`
                });
            }
        } else {
            res.send(data)
            res.send({ message: `User was delete with id:${req.params.id} was successfully deleted.`})
        }
    });
};

exports.deleteUsers = (req, res) => {
    User.deleteAll((err, data) => {
        if(err) {
            res.status(500).send({
                message: 
                    err.message || 'Some error occurred while removing all users.'
            });
        } else {
            res.send(({ message: 'All users were deleted successfully'}));
        }
    });
};