import Uni from '@uni-helper/plugin-uni'
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components'
import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import UniPolyfill from 'vite-plugin-uni-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://uni-helper.js.org/vite-plugin-uni-manifest
    UniHelperManifest(),
    // https://uni-helper.js.org/vite-plugin-uni-pages
    UniHelperPages({
      dts: 'dts/uni-pages.d.ts',
      dir: 'pages',
      outDir: '',
    }),
    // https://uni-helper.js.org/vite-plugin-uni-layouts
    UniHelperLayouts({
      layoutDir: 'layouts',
    }),
    // https://uni-helper.js.org/vite-plugin-uni-components
    UniHelperComponents({
      dts: 'dts/components.d.ts',
      directoryAsNamespace: true,
      dirs: ['components'],
    }),
    // https://uni-helper.js.org/plugin-uni
    Uni({
      // vueOptions: {
      //   template: {
      //     compilerOptions: {
      //       isCustomElement: (tag) => tag.startsWith('uni-'),
      //     },
      //   },
      // },
    }),
    UniPolyfill(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: 'dts/auto-imports.d.ts',
      dirs: ['composables', 'stores', 'utils'],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS(),
  ],
})
