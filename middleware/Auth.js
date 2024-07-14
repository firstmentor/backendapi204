const UserModel = require('../models/User')
const jwt = require('jsonwebtoken')

const ChangeUserAuth = async(req,res,next) => {
    try{
        const { token } = req.cookies
        // res.send(token)
        if(!token){
            res.status(401).json({
                'status':'failed',
                'message':'Unauthorised user, no token'
            })
            return
        }
        const data = jwt.verify(token,process.env.JWT_SECRET_KEY)
        // console.log(data)
        req.user = await UserModel.findById(data.userId)
        // res.send(req.user)
        next()
    }catch(err){
        res.send(err)
    }
}






const AuthRoles = (roles) => {
    return (req,res,next) => {
        res.send(roles)
    }
}

module.exports = {
    ChangeUserAuth,
    AuthRoles
}