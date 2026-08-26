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
    images: ['/images/products/organic-rice.jpg'],
    imageAlt: '白米近景（通用产品示意）',
    mediaNote: '通用农产品示意图',
    packagingPlan: '策划方向：环保牛皮纸材质、金黄稻田色系，并呈现有机认证与农业传承信息。'
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
      '/images/products/green-vegetables.jpg',
      '/media_new/product-showcase/OIP-C.webp'
    ],
    imageAlt: '南方市场常见绿色蔬菜（通用产品示意）',
    imageAlts: [
      '南方市场常见绿色蔬菜（通用产品示意）',
      '藤蔓上处于不同成熟阶段的小番茄'
    ],
    mediaNote: '通用南方农业素材',
    packagingPlan: '策划方向：透气、可回收的绿色包装，突出每日采摘与循环农业信息。'
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
    images: ['/images/products/rice-wine.jpg'],
    imageAlt: '传统酒坛场景（通用产品示意）',
    mediaNote: '通用江南酒类意象',
    packagingPlan: '策划方向：陶瓷酒器、江南书法与青白色系，强调传统酿造。'
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
    images: ['/images/products/lotus-seed-tea.jpg'],
    imageAlt: '花草茶冲泡场景（通用产品示意）',
    mediaNote: '通用茶饮素材',
    packagingPlan: '策划方向：简洁抽屉盒与荷花水彩元素，突出清雅、自然的茶饮气质。'
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
      '/images/products/seasonal-fruits.jpg',
      '/media_new/product-showcase/OIP-C (2).webp'
    ],
    imageAlt: '多种时令水果（通用产品示意）',
    imageAlts: [
      '多种时令水果（通用产品示意）',
      '果篮中集中陈列的黄色时令水果'
    ],
    mediaNote: '通用水果素材',
    packagingPlan: '策划方向：可循环果箱与四季果实插画，方便采摘和短途运输。'
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
    images: ['/images/products/steel-components.jpg'],
    imageAlt: '钢结构建筑构件（通用产业示意）',
    mediaNote: '通用钢结构素材',
    packagingPlan: '策划方向：工业运输标识、品牌色带与规格信息分区，适用于钢构件运输包装。'
  }
]

export const productCategories = [
  { value: 'all', label: '全部产品', description: '农业产品与工业制造共同构成村庄产业图景，既连接田间生产和日常消费，也体现乡村产业持续拓展的多元路径。' },
  { value: 'grain', label: '粮油', description: '水稻生产依托江南水田条件与生态种植方式，从育秧、管护到收获，串联起农业基础、产品品质与乡村增收。' },
  { value: 'vegetable', label: '蔬菜', description: '时令蔬菜强调新鲜采收与本地生产，田园种植、日常供应和采摘体验相互衔接，丰富了乡村农业的应用场景。' },
  { value: 'fruit', label: '水果', description: '果园随季节提供不同收获，成熟果实既是农业生产成果，也为亲子采摘和乡村休闲带来更具参与感的体验。' },
  { value: 'beverage', label: '饮品', description: '以稻米、莲子等农业意象延伸出的饮品策划，尝试把地方风物、传统制作与更便于传播的产品表达结合起来。' },
  { value: 'industrial', label: '工业产品', description: '工业制造拓宽了乡村产业结构，与农业、服务业形成互补，也为就业、集体经济和村庄长期发展提供现实支撑。' }
]
