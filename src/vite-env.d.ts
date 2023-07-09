/// <reference types="vite/client" />


// 在代码中获取以 VITE_ 为前缀的用户自定义环境变量的 Typescript 智能提示
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_KEY: string
  readonly VITE_APP_TITLE: string
}