import { defineConfig } from '@uni-helper/unh'

/**
 * unh 配置文件
 * 更多配置请参考：https://uni-helper.js.org/unh/
 */
export default defineConfig({
  platform: {
    // 默认平台
    default: 'app',
    // 平台别名
    alias: {
      'h5': ['w', 'h'],
      'mp-weixin': 'wx',
      'app-android': 'app',
    },
  },
  autoGenerate: {
    pages: true,
    manifest: true,
    outDir: '',
  },
  env: {
    dts: 'dts/uni-env.d.ts',
  },
})
