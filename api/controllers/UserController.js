/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  profile: async (req , res)=>{
    try{
        const user = await Auth.find({id:req.user})
        const {password , ...userdetails} = user[0]
        return res.ok(userdetails)
    }catch(err){
        if(err.message){
            return res.badRequest(err.message.split('\n')[0])
        }else{
            return res.badRequest('Internal server error')
        }
    }
  },
};

