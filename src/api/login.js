import request from '@/utils/request'
/**
 *用户登录
 * @param {*} username
 * @param {*} password
 * @returns
 */
export const getLogin = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

/**
 * 用户信息
 * @returns
 */
// export const getUserInfo = () => {
//   return request({
//     url: '/user'
//   })
// }
