
const jwt = require('jsonwebtoken');

module.exports = {
  friendlyName: 'Verify token',
  description: '',
  inputs: {
    id: {
      type: 'ref'
    }
  },

  fn: async function (inputs,exits) {
    try{
      if(inputs.id.split(' ')[0] != 'Bearer'){return exits.error('Not a Bearer Token')}
      const userId = jwt.verify(inputs.id.split(' ')[1],'secret')
      const user = await Auth.find({id:userId.id})
      if(user.length == 0){return exits.error('Invalid Token')}
      return exits.success(userId.id)
    }catch(err){
      return exits.error(err.message)
    }
  }


};

