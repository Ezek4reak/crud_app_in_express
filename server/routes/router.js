const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/** 
* @descriptio Root Route
* @Method GET/
*/
route.get('/', services.homeRoutes)

/** 
* @descriptio add user Route
* @Method GET/add-user
*/
route.get('/add-user', services.addUser)

/** 
* @descriptio update user Route
* @Method GET/update-user
*/
route.get('/update-user', services.updateUser)

/** 
* @descriptio delete user Route
* @Method GET/delete-user:id
*/
route.get('/delete-user', services.deleteUser)

//API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;