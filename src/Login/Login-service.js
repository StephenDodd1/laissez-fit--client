import config from "../config";

const LoginService = {
  saveAuthToken(token) {
    console.log(token);
    return window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
};

export default LoginService;
