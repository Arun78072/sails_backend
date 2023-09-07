/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  signIn :async (req , res)=>{
    try {
        const {username} = req.body
        const findUser = await Auth.find({username})
        if(findUser.length != 0) { return res.badRequest(message ='User Already Exist')}
        else{
          if(req.file('avatar')._files.length > 0){
            req.file('avatar').upload({
              dirname: require('path').resolve(sails.config.appPath, 'assets/images')
            },async function  (err, uploadedFile) {
              if (err) return res.serverError(err);
              if(uploadedFile.length > 0){
              imgUrl = uploadedFile[0].fd.split('\\')
              const user = await Auth.create({...req.body,avatar : imgUrl[imgUrl.length -1]}).fetch();
              const {password , ...userDetails} = user
              const token = await sails.helpers.signToken(user.id)
              return res.ok({...userDetails, token});
              }
            });
          }
          else{
            const user = await Auth.create({...req.body,avatar : imgUrl[imgUrl.length -1]}).fetch();
            const {password , ...userDetails} = user
            const token = await sails.helpers.signToken(user.id)
            return res.ok({...userDetails, token});
          }
          
        }
    } catch (error) {
    if(error.code == 'E_INVALID_NEW_RECORD'){
      return res.badRequest(error.message.split('\n')[3]);
    }else{
      return res.badRequest('Internal server error');
    }
    }
  },
  login : async (req ,res)=>{
    try{
      const {username , password} = req.body
      if(username && password){
        const checkUser = await Auth.find({username,password})
        if(checkUser.length > 0){
          const {password , ...userDetails}  = checkUser[0]
          const token = await sails.helpers.signToken({id: checkUser[0].id})
          res.ok({...userDetails,token})
        }else{
          res.badRequest('No Record Found')
        }
      }else{
        res.badRequest('No Record Found')
      }
    }catch(err){
      res.badRequest()
    }
  }
};

