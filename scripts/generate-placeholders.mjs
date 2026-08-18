import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '..', 'public', 'images')

const categoryConfig = {
  hero: {
    gradient: ['#0f3a21', '#1f6d3d', '#2d8a4f'],
    icon: 'mountain',
    label: '蒋巷村'
  },
  history: {
    gradient: ['#1f6d3d', '#16482b'],
    icon: 'timeline',
    label: '村史回顾'
  },
  landmarks: {
    gradient: ['#2d8a4f', '#1f6d3d'],
    icon: 'pin',
    label: '地标景点'
  },
  photos: {
    gradient: ['#1f6d3d', '#16482b'],
    icon: 'camera',
    label: '蒋巷摄影'
  },
  products: {
    gradient: ['#d4a017', '#b45309'],
    icon: 'product',
    label: '特色农产品'
  },
  posters: {
    gradient: ['#16482b', '#0f3a21'],
    icon: 'play',
    label: '视频封面'
  }
}

const fileLabels = {
  'hero/hero-bg': '蒋巷村 · 新时代的桃花源',
  'history/1966-new-leader': '1966 · 新任带头人',
  'history/1968-transforming-land': '1968 · 改造土地',
  'history/1980-building-homes': '1980 · 建设家园',
  'history/1983-first-enterprise': '1983 · 首家村办企业',
  'history/1993-closing-chemical': '1993 · 关停化工厂',
  'history/1995-villa-community': '1995 · 别墅社区',
  'history/1999-new-village': '1999 · 新农村建设',
  'history/2004-tourism-takes-off': '2004 · 旅游起步',
  'history/2005-circular-economy': '2005 · 循环经济',
  'history/2011-4a-scenic': '2011 · 国家4A级景区',
  'history/2015-organic-agriculture': '2015 · 有机农业',
  'history/2018-academy': '2018 · 蒋巷书院',
  'history/2019-key-village': '2019 · 乡村旅游重点村',
  'history/2021-zero-carbon': '2021 · 零碳村庄',
  'landmarks/ecological-park': '生态园',
  'landmarks/organic-rice-base': '有机稻田',
  'landmarks/lotus-pond': '荷香园',
  'landmarks/vegetable-garden': '蔬菜园',
  'landmarks/village-history-hall': '村史馆',
  'landmarks/folk-museum': '民俗馆',
  'landmarks/jiangxiang-academy': '蒋巷书院',
  'landmarks/nursing-home': '老年护理中心',
  'landmarks/villagers-homeland': '村民家园',
  'landmarks/gaga-tribe': '嘎嘎部落',
  'landmarks/eco-restaurant': '生态餐厅',
  'photos/spring-rice-fields': '春日稻田',
  'photos/duckweed-blanket': '绿萍铺满田',
  'photos/summer-lotus-pond': '夏日荷塘',
  'photos/bamboo-forest-path': '竹林小径',
  'photos/autumn-harvest-gold': '秋收金浪',
  'photos/golden-rice-fields': '金色稻田',
  'photos/winter-snow-villas': '冬雪别墅',
  'photos/geese-winter-fields': '冬田鹅群',
  'photos/village-community-life': '村庄社区生活',
  'photos/reading-culture': '阅读文化',
  'photos/elderly-care-center': '老年护理中心',
  'photos/organic-farming': '有机农耕',
  'photos/village-entrance-gate': '村口大门',
  'photos/ecological-forest-belt': '生态林带',
  'photos/solar-panel-array': '光伏阵列',
  'photos/children-at-play': '儿童乐园',
  'photos/harvest-celebration': '丰收庆典',
  'photos/morning-field-walk': '晨间田间漫步',
  'products/organic-rice': '有机大米',
  'products/lotus-seed-tea': '莲芯茶',
  'products/green-vegetables': '绿色蔬菜',
  'products/seasonal-fruits': '时令水果',
  'products/rice-wine': '米酒',
  'products/steel-components': '钢构件',
  'products/packaging-organic-rice': '有机大米 · 包装方案',
  'products/packaging-lotus-tea': '莲芯茶 · 包装方案',
  'products/packaging-green-vegetables': '绿色蔬菜 · 包装方案',
  'products/packaging-fruits': '时令水果 · 包装方案',
  'products/packaging-rice-wine': '米酒 · 包装方案',
  'products/packaging-steel': '钢构件 · 包装方案',
  'posters/village-overview': '蒋巷村概览',
  'posters/social-practice': '社会实践',
  'posters/organic-farming': '有机农耕',
  'posters/chang-story': '常德盛的故事'
}

function generateSVG(category, filePath) {
  const config = categoryConfig[category] || categoryConfig.landmarks
  const key = filePath.replace(/\\/g, '/').replace(/^public\/images\//, '').replace(/\.svg$/, '')
  const label = fileLabels[key] || config.label
  const [c1, c2, c3] = config.gradient

  const illustrations = {
    mountain: `
      <path d="M0 420 L150 280 L280 360 L400 220 L520 320 L640 250 L800 380 L800 600 L0 600 Z" fill="${c3}" opacity="0.3"/>
      <path d="M0 460 L120 350 L250 410 L380 300 L500 370 L620 310 L800 420 L800 600 L0 600 Z" fill="${c3}" opacity="0.2"/>
      <circle cx="650" cy="120" r="40" fill="#d4a017" opacity="0.15"/>
    `,
    timeline: `
      <line x1="100" y1="300" x2="700" y2="300" stroke="#fff" stroke-width="3" opacity="0.2"/>
      <circle cx="150" cy="300" r="10" fill="#fff" opacity="0.4"/>
      <circle cx="300" cy="300" r="10" fill="#fff" opacity="0.4"/>
      <circle cx="450" cy="300" r="10" fill="#fff" opacity="0.4"/>
      <circle cx="600" cy="300" r="10" fill="#fff" opacity="0.4"/>
      <circle cx="400" cy="300" r="16" fill="#d4a017"/>
    `,
    pin: `
      <path d="M400 200 C340 200 300 240 300 300 C300 380 400 460 400 460 C400 460 500 380 500 300 C500 240 460 200 400 200 Z" fill="#fff" opacity="0.15"/>
      <circle cx="400" cy="300" r="30" fill="#fff" opacity="0.25"/>
    `,
    camera: `
      <rect x="250" y="240" width="300" height="200" rx="20" fill="#fff" opacity="0.1"/>
      <circle cx="400" cy="340" r="60" fill="#fff" opacity="0.15"/>
      <circle cx="400" cy="340" r="40" fill="#fff" opacity="0.1"/>
      <rect x="480" y="220" width="40" height="30" rx="5" fill="#fff" opacity="0.1"/>
    `,
    product: `
      <rect x="280" y="220" width="240" height="240" rx="16" fill="#fff" opacity="0.12"/>
      <rect x="300" y="240" width="200" height="200" rx="8" fill="#fff" opacity="0.08"/>
      <path d="M350 340 L390 300 L430 340 L470 310 L470 420 L350 420 Z" fill="#fff" opacity="0.1"/>
    `,
    play: `
      <circle cx="400" cy="300" r="70" fill="#fff" opacity="0.15"/>
      <path d="M380 260 L380 340 L440 300 Z" fill="#fff" opacity="0.4"/>
    `
  }

  const illustration = illustrations[config.icon] || illustrations.pin

  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="50%" stop-color="${c2}"/>
      <stop offset="100%" stop-color="${c3 || c2}"/>
    </linearGradient>
    <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1.5" fill="#fff" opacity="0.03"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <rect width="800" height="600" fill="url(#dots)"/>
  ${illustration}
  <text x="400" y="300" font-size="32" fill="#fff" text-anchor="middle" font-family="'PingFang SC','Microsoft YaHei',sans-serif" font-weight="700" opacity="0.95">${label}</text>
  <text x="400" y="340" font-size="14" fill="#fff" text-anchor="middle" font-family="'PingFang SC','Microsoft YaHei',sans-serif" opacity="0.4">蒋巷村 · 六朝松小纵队</text>
</svg>`
}

let count = 0
function processDir(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true })
  for (const item of items) {
    const fullPath = path.join(dir, item.name)
    if (item.isDirectory()) {
      processDir(fullPath)
    } else if (item.name.endsWith('.svg')) {
      const relPath = path.relative(path.join(imagesDir, '..'), fullPath)
      const category = path.basename(path.dirname(fullPath))
      const svg = generateSVG(category, relPath)
      fs.writeFileSync(fullPath, svg.trim())
      count++
    }
  }
}

processDir(imagesDir)
console.log(`Generated ${count} SVG placeholders`)
