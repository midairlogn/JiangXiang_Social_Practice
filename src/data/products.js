export const products = [
  {
    id: 1,
    name: '蒋巷有机大米',
    category: 'grain',
    price: '¥20/公斤',
    unit: '',
    badge: '绿色食品认证',
    desc: '产自1200亩认证有机稻田。不施化肥、不喷农药，采用"稻鸭鹅共作"生态模式，以绿萍为天然肥料。年产49万公斤，品质提升后从每公斤6元涨到20元仍供不应求。',
    features: ['有机认证', '稻鸭鹅共作', '绿萍天然肥料', '一季轮作制'],
    images: [
      '/images/products/organic-rice.svg',
      '/images/products/organic-rice.svg'
    ],
    packagingDesign: '/images/products/packaging-organic-rice.svg',
    packagingDesc: '环保牛皮纸包装，主色调为金黄稻田色，印有蒋巷村标志。突出有机认证标志和村庄50余年农业传承。'
  },
  {
    id: 2,
    name: '蒋巷绿色蔬菜',
    category: 'vegetable',
    price: '时令定价',
    unit: '',
    badge: '无公害',
    desc: '产自农民蔬菜园的新鲜蔬菜，使用村庄循环经济系统的有机堆肥种植。无农药残留，每日采摘，可供游客采摘体验。',
    features: ['有机堆肥', '每日采摘', '可采摘体验', '循环经济产品'],
    images: [
      '/images/products/green-vegetables.svg',
      '/images/products/green-vegetables.svg'
    ],
    packagingDesign: '/images/products/packaging-green-vegetables.svg',
    packagingDesc: '透气网袋包装，配再生纸标签。自然绿色调体现生态种植方式。'
  },
  {
    id: 3,
    name: '蒋巷米酒',
    category: 'beverage',
    price: '¥58/瓶(500ml)',
    unit: '',
    badge: '传统工艺',
    desc: '以蒋巷自产有机大米为原料，采用江南传统工艺酿造。醇厚甘甜的米酒，承载着水乡文化的韵味。',
    features: ['有机大米为基', '传统酿造', '江南风味', '手工制作'],
    images: [
      '/images/products/rice-wine.svg',
      '/images/products/rice-wine.svg'
    ],
    packagingDesign: '/images/products/packaging-rice-wine.svg',
    packagingDesc: '典雅陶瓷瓶身，书法风格标签。青花瓷灵感设计，呈现江南水乡美学。'
  },
  {
    id: 4,
    name: '蒋巷莲子茶',
    category: 'beverage',
    price: '¥48/盒(100g)',
    unit: '',
    badge: '天然野生',
    desc: '采自蒋巷生态园荷塘的莲子，自然晾干制成。冲泡后清香怡人，富含传统养生功效，是健康养生的好选择。',
    features: ['荷塘采摘', '自然晾干', '养生茶饮', '无咖啡因'],
    images: [
      '/images/products/lotus-seed-tea.svg',
      '/images/products/lotus-seed-tea.svg'
    ],
    packagingDesign: '/images/products/packaging-lotus-tea.svg',
    packagingDesc: '极简推拉式纸盒，配荷塘水彩插画。粉绿色调体现夏日荷塘意境。'
  },
  {
    id: 5,
    name: '蒋巷时令鲜果',
    category: 'fruit',
    price: '时令定价',
    unit: '',
    badge: '树上熟',
    desc: '产自生态园果园的梨、桃、葡萄等时令水果。树上自然成熟、手工采摘，可供游客采摘体验。',
    features: ['果园种植', '树上成熟', '采摘体验', '时令品种'],
    images: [
      '/images/products/seasonal-fruits.svg',
      '/images/products/seasonal-fruits.svg'
    ],
    packagingDesign: '/images/products/packaging-fruits.svg',
    packagingDesc: '可回收木条箱包装，配天然麻绳提手。按季节印有水彩水果插画，暖色丰收色调。'
  },
  {
    id: 6,
    name: '常盛钢构件',
    category: 'industrial',
    price: '工业定价',
    unit: '',
    badge: '江苏名牌',
    desc: '建筑用钢结构件。常盛集团的旗舰产品——江苏省最大的钢结构生产基地。连续五年荣获上海市"金钢奖"，产品远销全国20多个省区市。',
    features: ['江苏省名牌', '五连冠金钢奖', '覆盖20+省份', '亿元级企业'],
    images: [
      '/images/products/steel-components.svg',
      '/images/products/steel-components.svg'
    ],
    packagingDesign: '/images/products/packaging-steel.svg',
    packagingDesc: '工业级包装，配品牌钢带。"常盛"商标为江苏省著名商标。'
  }
]

export const productCategories = [
  { value: 'all', label: '全部产品' },
  { value: 'grain', label: '粮油' },
  { value: 'vegetable', label: '蔬菜' },
  { value: 'fruit', label: '水果' },
  { value: 'beverage', label: '饮品' },
  { value: 'industrial', label: '工业产品' }
]
