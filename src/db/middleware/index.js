const bcrypt = require("bcryptjs")//<= Pulls in bcrypt to use from npm



exports.hashPassword = async (req, res, next) => {
    try { 

        req.body.password = await bcrypt.hash(req.body.password, 8)
        //Salt is the fuel of the hashing algorithm. 8 Is the fuel 
       
        next() // An Expressfunction which moves us to the next line 
    } catch (error) {
        console.log(error);
    }


}