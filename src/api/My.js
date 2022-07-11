import request from '@/utils/request'

/**
 *我的收藏
 * @returns
 */
export const getFavorites = (token) => {
  return request({
    url: 'user/favorites',
    headers: {
      authorization: token
    }
  })
}

/**
 * 我的出租
 * @returns
 */
export const getHire = (token) => {
  return request({
    url: 'user/houses',
    headers: {
      authorization: token
    }
  })
}

export const getHouses = (houseCode) => {
  return request({
    url: `/houses/${houseCode}`
  })
}

/**
 * 用户信息资料
 * @param {*} token
 * @returns
 */
export const getUserInfo = (token) => {
  return request({
    url: '/user',
    headers: {
      authorization: token
    }
  })
}
