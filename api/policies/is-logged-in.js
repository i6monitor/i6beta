module.exports = async function (req, res, proceed) {
  let token = req.headers.token;

  if (typeof (token) == 'undefined') return res.forbidden();

  try {
    let decryptedSessionStorageToken = TokenService.verify(token);

    User
      .findOne({
        id: decryptedSessionStorageToken.id
      })
      .exec((error, user) => {
        if (error) return res.serverError(error);
        if (user) return proceed();
      })
  } catch (error) {
    return res.forbidden(error);
  }
};
