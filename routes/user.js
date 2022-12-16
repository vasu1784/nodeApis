const express = require("express");
const router = express.Router();
const {getUser} = require("../controller/user");
const {createUser} =require("../controller/user");
const {getUserByID} =require("../controller/user");
const {deleteUser} =require("../controller/user");
const {updateUserById} =require("../controller/user") 

router.route("/")
    .get(getUser)
   .post(createUser);

router.route("/:id")
    .get(getUserByID)
    .delete(deleteUser)
    .put(updateUserById);

// router.get('/',(req, res)=>{
//     res.status(200).json({
//         sucess:true,
//         message:"Hello World"
//     });
// });

// router.post('/',(req, res)=>{
//     res.status(200).json({
//         sucess:true,
//         message:"Create Post"
//     });
// });

// router.put('/:id',(req, res)=>{
//     res.status(200).json({
//         sucess:true,
//         message:`update ${req.params.id}`
//     });
// });

// router.delete('/:id',(req, res)=>{
//     res.status(200).json({
//         sucess:true,
//         message:`delete ${req.params.id}`
//     });
// });

module.exports = router;