module.exports = async function (req ,res ,next){
    try {
        const userDetails = await sails.helpers.verifyToken(req.headers.authorization)
        req.user = userDetails; // Attach the user to the request object
        return next();
      } catch (err) {
        return res.forbidden('Invalid token');
      }
}