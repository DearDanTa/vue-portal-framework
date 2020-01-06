import request from '@/utils/request';
import { GLOBAL_CONFIG, REST_SERVICE } from '@/config';
import { localDataUser } from '@/utils/local-data';

/**
 * 登陆
 * @param {String} username
 * @param {String} password
 * @return {AxiosPromise}
 */
export function login(username, password) {
  return request({
    url: REST_SERVICE.login.login,
    method: 'get',
    params: {
      username,
      password,
      appKey: GLOBAL_CONFIG.APP_KEY
    }
  }).then((res) => {
    localDataUser.set({
      username,
      token: res.data.gmsso_cli_ec_key
    });
    return true;
  });
}
