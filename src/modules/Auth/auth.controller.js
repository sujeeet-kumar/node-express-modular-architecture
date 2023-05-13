const AuthService = require('./auth.service');

const AuthController = {
  /**
   * Handle logging in user.
   * @async
   * @function
   * @param {ExpressRequest} httpRequest incoming http request
   * @returns {Promise.<ControllerResponse> }
   */
  login: async (httpRequest) => {
    const loginData = await AuthService.doLogin(httpRequest.body);
    return {
      statusCode: 200,
      body: {
        data: loginData,
      },
    };
  },
};

module.exports = AuthController;
