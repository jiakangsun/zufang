import request from '@/utils/request'
/**
 * 获取轮播图
 * @returns
 */
export const getSwiper = () => {
  return request({
    url: '/home/swiper'
  })
}

/**
 * 租房小组
 * @returns
 */
export const getGroups = () => {
  return request({
    url: 'home/groups'
  })
}
