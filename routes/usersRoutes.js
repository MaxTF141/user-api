module.exports = app => {
    const users = require('../controllers/usersControllers.js');

    const router = require('express').Router();

    router.get('/users', users.findUsers);

    router.get('/users/:id', users.findOneUser);

    router.post('/users/', users.createUser);

    router.put('/users/:id', users.updateUser);

    router.delete('/users/:id', users.deleteOneUser);

    router.delete('/users/', users.deleteUsers);

    app.use('/backend/server.js', router);
}