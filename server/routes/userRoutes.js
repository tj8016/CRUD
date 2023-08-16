const express = require('express');
const router = express.Router();
// import controller
const {createUser, updateUser, deleteUser, singleUser, allUsers} = require('../controller/userContoller')

// routes
router.post('/user/create', createUser);
router.put('/user/update/:id', updateUser);
router.delete('/user/delete/:id', deleteUser);
router.get('/user/singleuser/:id', singleUser);
router.get('/user/allusers', allUsers);

module.exports = router;