/*
 * @Author: web.王晓冬
 * @Date: 2020-03-20 18:25:34
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-08-07 13:27:29
 * @Description: file content
 */
const MOCK_ADDRESS = ''
const ISMOCK = false
export default {
  __mockAddress: MOCK_ADDRESS,
  /* =============人机结合API=========== */
  // 模拟客服人员
  mockGetUser: {
    url: '/mock/getUser',
    methods: 'get',
    mock: ISMOCK,
    showMsg: false
  },
  // 登陆验证
  validUser: {
    url: '/ValidUser',
    mock: ISMOCK,
    methods: 'post'
  },
}
