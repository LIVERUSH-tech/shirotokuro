import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 独自ドメイン shirotokuro.com（ルート直下）で公開するため base は '/'。
// import.meta.env.BASE_URL が '/' になり、ルーティング・404 リダイレクトの
// 基準になる。
// ※ プロジェクトページ（github.io/shirotokuro/）に戻す場合は
//    base を '/shirotokuro/' に、404.html の pathSegmentsToKeep を 1 に戻すこと。
export default defineConfig({
  plugins: [react()],
  base: '/',
})
