const bcrypt = require("bcryptjs")//<= Pulls in bcrypt to use from npm
const User = require("../../user/model")



exports.hashPassword = async (req, res, next) => {
    try { 

        req.body.password = await bcrypt.hash(req.body.password, 8)
        //Salt is the fuel of the hashing algorithm. 8 Is the fuel 
       
        next() // An Expressfunction which moves us to the next line 
    } catch (error) {


        console.log(error);
    }


}


exports.checkPassword = async (req, res, next) => { //next is express
    try {
        const user = await User.find({username: req.body.username})     
            const result = await bcrypt.compare(req.body.password, user[0].password)
            console.log("result from bcrypt.compare", result ); 
            
            if(result ) {
                next()
            } else {
                throw new Error("Incorrect password")
                res.send("Incorrect password")
            }
    } catch (error) {
        
    }
   


}