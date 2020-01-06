export const GLOBAL_CONFIG = window.CONFIG; // 来自 public/config.js 中

export const REST_SERVICE = {
  login: {
    token: GLOBAL_CONFIG.login + 'checkTokenByAppKey', // 获取token
    login: GLOBAL_CONFIG.login + 'login', // 登录
    logout: GLOBAL_CONFIG.login + 'logout' // 登出
  }
};
