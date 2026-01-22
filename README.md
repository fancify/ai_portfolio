# AI Projects Portfolio

个人AI项目作品集与快捷入口网站。

## 功能

- 展示个人AI项目作品集
- 提供项目快捷访问入口
- 响应式设计，支持移动端

## 项目结构

```
ai-portfolio/
├── pages/          # Next.js 页面
├── components/     # React 组件
├── data/          # 项目数据配置
├── types/         # TypeScript 类型定义
├── styles/        # 全局样式
└── public/        # 静态资源
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000 查看网站。

## 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入你的 GitHub 仓库
3. Vercel 会自动检测 Next.js 项目并完成部署

### 部署步骤

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 在 GitHub 创建新仓库后，添加远程仓库
git remote add origin https://github.com/yourusername/ai-portfolio.git

# 推送到 GitHub
git push -u origin main
```

然后在 Vercel 中导入该仓库即可自动部署。

## 添加新项目

编辑 `data/projects.ts` 文件，添加新的项目信息：

```typescript
{
  id: 'project-id',
  name: '项目名称',
  description: '项目描述',
  techStack: ['技术1', '技术2'],
  status: 'active' | 'completed' | 'planned',
  demoUrl: 'https://demo-url.com',
  githubUrl: 'https://github.com/username/repo',
  apiUrl: 'https://api-url.com/docs',
}
```

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: CSS (自定义设计系统)
- **部署**: Vercel

## 特性

- 🎨 现代化深色主题设计
- 📱 完全响应式布局
- ⚡ 快速加载和优化
- 🔗 项目快捷链接
- 🏷️ 技术栈标签展示
- 📊 项目状态标识
