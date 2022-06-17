const User = require("./model")

exports.createUser = async (req, res) => { // Request & Response
 try {
   const userObj = {
      username: req.body.username, 
      email: req.body.email,
      password: req.body.password,
   }
   const newUser = await User.create(userObj); // Adds new user .create is a mongoose method
    res.send({ newUser })
   
 } 
 catch (error) {
    console.log(error)
    res.send({error})
    } 
};

exports.getUsers = async (req, res) => {
   const users = await User.find() //.find() is a mongoose method, mongoose = odm
   console.log(users)
   res.send(users) // Returning back to isomnia
}


exports.deleteUsers = async (req, res) => {
 const users = await User.deleteOne() // deleteOne mongoose method 
 res.send(users) // Returns deleted to insomnia

}

exports.updateUsers = async (req, res) => {
   const userObj = {
      username: req.body.username, 
      email: req.body.email,
      password: req.body.password,
   }

 const users = await User.findOneAndUpdate(userObj)



   res.send(users);


}


