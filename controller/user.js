const res = require("express/lib/response");
const db = require("../config/db");
const crypto = require('crypto');

exports.getUser = (req, res, next) => {
   db.query(`SELECT * FROM users`, [], (error, results, fields) => {
    if (error) {
      console.log(error);
    }
    res.status(200).json({
        sucess: true,
        message: "Sucessfully Fetched user data",
        count: results.length,
        data: results
      });
  });
};

exports.getUserByID = (req, res, next) => {
            db.query(`SELECT * FROM users WHERE id =?`,[req.params.id],(error,results,fields)=>{
                      if(error){
                        console.log(error);
                      }
                      res.status(200).json({
                        sucess: true,
                        message: `User get with id ${req.params.id}`,
                        data:results
                      });
            })
 
  };
  

exports.createUser = (req,res,next) => {

  // Hash a password using MD5
  const password = req.body.password;
  const hash = crypto.createHash('md5').update(password).digest('hex');
       db.query(`INSERT INTO users(firstname,lastname,email,password,address) VALUES(?,?,?,?,?)`,[
         req.body.firstname,
         req.body.lastname,
         req.body.email,
         hash,
         req.body.address,
        // req.body
       ],(error,results,fields)=>{
             if(error){
                console.log(error);
             }
             res.status(201).json({
                sucess: true,
                message: "New User Created",
                // data:results,
              });
       })
};


exports.deleteUser =(req,res,next)=>{
       console.log(req.body);
    db.query(`DELETE FROM users WHERE id = ?`,[req.params.id],(error,results,fields)=>{
              if(error){
                console.log("error");
              }  
              res.status(200).json({
                    sucess: true,
                    message: `user is sucessfully delete with id ${req.params.id}`,
                  });
         
    });



}


// exports.deleteUser = (req, res) => {
//   res.status(200).json({
//     sucess: true,
//     message: `user is sucessfully delete with id ${req.params.id}`,
//   });
// };

exports.updateUserById = (req, res) => {
  res.status(200).json({
    sucess: "true",
    message: `Result is Updated with id ${req.params.id}`,
  });
};
