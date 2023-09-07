module.exports = function badRequest(message = 'BAD_REQUEST') {
    const req = this.req;
    const res = this.res;
    const status = 400;
    const response = {status, message}
    return res.status(status).send(response);
  };
  