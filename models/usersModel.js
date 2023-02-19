//import the connection
const db = require('../config/database.js');

const Users =(user) => {
    this.user_name = user.user_name; 
    this.user_surname = user.user_surname; 
    this.user_email = user.user_email; 
    this.user_age = user.user_age; 
    this.user_password = user.user_password; 
};

Users.getUsers = (result) => {
    db.query('SELECT * FROM users', (err, res)=>{
        if(err) {
            console.log('err', err);
            result(err, null);
        } else (
            result(null, res)
        )
    })
};

Users.getUsersById = (id, result)=> {
    db.query('SELECT * FROM users WHERE user_id = ?', [id], (err, res)=> {
        if(err){
            console.log('error', err);
            result(err, null);
        } else (
            result(null, res)
        )
    })
};

Users.postUser = (newUser, result) => {
    db.query('INSERT INTO users SET ?', [newUser], (err, res)=>{
        if(err){
            console.log('error', err);
            result(err, null);
        } else {
            result(null, res);
        }
    })
};

Users.putUser = (id, data,  result) =>{
    db.query('UPDATE users SET user_name=?, user_surname=?, user_email=?, user_age=?, user_password=? WHERE user_id = ?', [data.user_name, data.user_surname, data.user_email, data.user_age, data.user_password, id], (err, res)=>{
        if(err){
            console.log('err', err);
            result(err, null);
        } else {
            result(null, res)
        }
    });
}

Users.deleteAll = (result) => {
    bd.query('TRUNCATE TABLE users', (err, res)=>{
        if(err) {
            console.log('error', err);
            result(err, null);
        } else {
            result(null, res);
        }
    })
};

Users.deleteById = (id, result) => {
    db.query('DELETE FORM TABLE users WHERE user_id = ?', [id], (err, res)=>{
        if(err) {
            console.log('error', err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
};

