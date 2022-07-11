import request from '@/utils/request'

/**
 *  根据条件查询房屋
 * @returns
 */
export const getHouse = () => {
  return request({
    url: '/houses'
  })
}

/**
 *  获取房屋查询条件（下拉 筛选部分）
 * @returns
 */
export const getCondition = (id) => {
  return request({
    url: '/houses/condition',
    params: { id }
  })
}
