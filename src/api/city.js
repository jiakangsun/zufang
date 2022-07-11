import request from '@/utils/request'

/**
 *  城市列表
 * @returns
 */
export const getCityList = (level) => {
  return request({
    url: '/area/city',
    params: { level: 1 }
  })
}

/**
 *  热门城市
 * @returns
 */
export const getHotCity = () => {
  return request({
    url: '/area/hot'
  })
}

/**
 *
 * @returns 根据城市名称查询该城市信息
 */
export const getCityInfo = (name) => {
  return request({
    url: '/area/info',
    params: { name }
  })
}
