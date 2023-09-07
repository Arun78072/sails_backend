module.exports = {
  friendlyName: 'Add media',
  description: '',


  fn: async function (inputs,exist) {
    // TODO
    if(req.file('avatar')._files.length > 0){
      req.file('avatar').upload({
        dirname: require('path').resolve(sails.config.appPath, 'assets/images')
      },async function  (err, uploadedFile) {
        if (err) return res.serverError(err);
        if(uploadedFile.length > 0){
        imgUrl = uploadedFile[0].fd.split('\\')
        // req.body.avatar = imgUrl[imgUrl.length -1]
        }
      });
    }
  }


};

