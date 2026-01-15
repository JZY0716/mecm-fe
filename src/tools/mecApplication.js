// src/tools/mecApplication.js
// 导入request.js导出的appInstance模块
// import { appInstance } from './request'

/// /获取所有appinstance_id列表（复用request.js的GET封装、权限拦截器）
// export function getAllAppinstanceIds () {
//  return appInstance.getAllAppinstanceIds()
// }

// 仅保留成功场景的Mock数据（可自定义需要显示的appinstance_id）
const MOCK_APP_ID_LIST = [
  'app-1001',
  'app-1002',
  'mec-app-2025',
  'edge-gallery-001'
]

/**
 * 获取所有appinstance_id（仅成功场景）
 * @returns {Promise} 模拟接口成功返回
 */
export function getAllAppinstanceIds () {
  return new Promise((resolve) => {
    // 模拟500ms接口延迟（可选，注释掉可立即返回）
    setTimeout(() => {
      resolve({
        // 完全匹配前端解析的格式：code + msg + data
        code: 200,
        msg: '查询成功',
        data: MOCK_APP_ID_LIST
      })
    }, 500)
  })
}

