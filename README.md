# React-Ts-Vite

基于 Vite + Ts + ReactRouter + ReduxToolkit + AntDesign 构建的 React 基础模板

## 🚀 开发

```bash
# 配置
1. node v18.15.x
2. npm v9.5.x
```

## 依赖安装

```sh
npm install
```

### 开发环境

```sh
npm run dev
```

### 生产环境打包

```sh
npm run build
```

### 代码格式检查[ESLint](https://eslint.org/)

```sh
npm run lint
```

### 目录

```
├─ xxx.d.ts // ts 环境变量配置
├─ tsconfig.json // ts 全局配置
├─ tsconfig.node.json // ts配置
├─ .vscode // vscode 配置文件
├─ public // 根目录静态资源(/访问)
├─ .env.xxx // 各环境的配置文件
├─ vite.config.ts // 项目配置
├─ index.html // 入口文件
├─ .gitignore // 配置 git 提交忽略文件
├─ eslintrc.cjs // eslint 配置
├─ prettierrc.json // prettier 配置
├─ package.json // 项目配置文件
├─ package-lock.json // 安装的依赖包指定版本(node_modules 快照)
└─ src
   ├─ assets // 静态资源
   │─ App.tsx // 根容器
   │─ main.tsx // 入口文件
   │─ vite-env.d.ts // 定义全局类型
   ├─ router // 路由

   ├─ components // 组件
   ├─ views // 页面
   ├─ stores // pinia 状态
   ├─ servers // 服务
   ├─ utils // 公用方法
```

## Git 提交规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
- `mod` 不确定分类的修改
