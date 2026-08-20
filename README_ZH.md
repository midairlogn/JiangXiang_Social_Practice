# 蒋巷村社会实践网站

一个响应式网站，展示江苏省常熟市蒋巷村——中国乡村振兴的典范。作为社会实践项目，涵盖村庄历史、荣誉、生态旅游、农产品和摄影等内容。

<div align="center">

**中文简体** | [**English**](README.md)

</div>

## 功能模块

- **宣传片** — 精选视频画廊，自定义 Video.js 播放器，支持生成微信小程序内嵌代码
- **导览地图** — 基于 Leaflet 的交互式地图，包含12个地标/景点，支持分类筛选和弹窗卡片
- **村庄介绍** — 可滚动的村史时间线（1966–2022）、荣誉展示（16项村庄荣誉 + 7项个人荣誉）、领导视察记录、现代价值信息图
- **特色展示** — 农产品展示（含包装设计方案）和按季节/主题分类的美景瀑布流画廊（春/夏/秋/冬 × 景致/生活/劳动）

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Vue 3（Composition API） |
| 构建工具 | Vite 5 |
| UI 组件库 | Element Plus |
| 样式 | SCSS + Tailwind CSS |
| 地图 | Leaflet.js |
| 视频 | Video.js |
| 状态管理 | Pinia |
| 路由 | Vue Router（Hash 模式） |

## 项目结构

```
src/
├── assets/styles/       # 全局样式
├── components/
│   ├── common/          # 导航栏、页脚、加载组件
│   ├── video/           # 视频播放器、视频画廊
│   ├── map/             # 导览地图（Leaflet）
│   ├── village/         # 村史、荣誉、现代价值
│   └── gallery/         # 农产品展示、照片画廊
├── data/                # 数据文件（历史、荣誉、地标、产品、照片、视频）
├── router/              # 路由配置
├── stores/              # Pinia 状态管理
└── views/               # 页面视图（首页、宣传片、地图、村庄介绍、特色展示）
```

## 快速开始

### 环境要求

- Node.js 18+
- npm 9+

### 安装

```bash
npm install
```

### 开发

```bash
npm run dev
```

网站将在 `http://localhost:5173` 启动。

#### 自定义端口

设置 `PORT` 环境变量（全平台通用）或使用 Vite 的 `--port` 参数：

```bash
# 环境变量（默认 5173）
# macOS/Linux:  PORT=8080 npm run dev
# Windows (PS): $env:PORT=8080; npm run dev

# 或使用 Vite 参数（全平台通用）
npm run dev -- --port 8080
```

### 构建

```bash
npm run build
```

构建产物输出到 `dist/`。预览生产构建：

```bash
npm run preview
```

## 媒体资源

### 视频

宣传片存放于 `public/videos/jiangxiang-social-practice.mp4`（174 MB），在首页 Hero 区和视频画廊中引用。

### 图片

所有图片本地存储在 `public/images/`，按类别组织：

```
public/images/
├── hero/          # 首页背景
├── history/       # 时间线图片
├── landmarks/     # 地标图片
├── photos/        # 照片画廊
├── posters/       # 视频封面
└── products/      # 产品及包装图片
```

当前大部分图片为 SVG 占位符（绿色背景，显示"Jiangxiang Village"文字）。替换为真实照片的方法：

1. 将照片放入 `public/images/<类别>/`，使用相同文件名但扩展名改为 `.jpg`
2. 更新 `src/data/*.js` 中对应的路径（将 `.svg` 改为 `.jpg`）
3. 所有资源的备份副本保存在 `resources/images/`（已加入 .gitignore）

### 重新下载占位图片

可修改 `download-images.ps1` 脚本并重新运行，从任意 URL 下载真实图片。

## 内容来源

关于蒋巷村的所有文字内容基于公开资料，包括：

- 人民日报英文版（en.people.cn）
- 江苏民政厅（mzt.jiangsu.gov.cn）
- 苏州英文门户网（english.suzhou.gov.cn）
- 央视网（news.cntv.cn）
- 中国日报（chinadaily.com.cn）
- 新浪财经（finance.sina.com.cn）
- 央广网江苏（js.cnr.cn）
- 澎湃新闻（thepaper.cn）

## 关键数据（2022–2024）

| 指标 | 数值 |
|------|------|
| 经济总产值 | 10亿元 |
| 人均可支配收入 | 62,500元 |
| 村集体净资产 | 3.6亿元 |
| 绿化覆盖率 | 60%+ |
| 户数 | 192户 |
| 人口 | 875人 |
| 面积 | 3平方公里 |
| 国家级荣誉 | 约100项 |

## 部署

构建后的 `dist/` 文件夹为静态文件，可部署到任意静态托管服务：

- **Vercel**：`vercel deploy dist`
- **Netlify**：拖拽 `dist/` 文件夹上传
- **GitHub Pages**：将 `dist/` 内容推送到 `gh-pages` 分支

## 许可证

[GNU General Public License v3.0](LICENSE)