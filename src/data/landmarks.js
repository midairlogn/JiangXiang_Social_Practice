export const landmarks = [
  {
    id: 1,
    name: '村史展览馆',
    category: 'culture',
    coordinates: [31.5686, 121.0492],
    image: '/images/landmarks/village-history-hall.jpg',
    desc: '蒋巷故事的核心所在。馆内陈列近百项国家和省级荣誉。常德盛亲自为游客讲解蒋巷村从血吸虫病流行的穷乡僻壤到乡村振兴典范的蜕变历程。',
    visiting: '免费参观，提供讲解服务'
  },
  {
    id: 2,
    name: '蒋巷生态园',
    category: 'nature',
    coordinates: [31.5702, 121.0515],
    image: '/images/landmarks/ecological-park.jpg',
    desc: '占地600多亩的生态园，以"农"字为核心。荷塘、竹林、果园交相辉映，设有彩虹滑道等30多个游乐项目。每年吸引游客超20万人次，是蒋巷生态旅游的核心区域。',
    visiting: '需购票入园，包含大部分游乐项目'
  },
  {
    id: 3,
    name: '村民新家园',
    category: 'residential',
    coordinates: [31.5672, 121.0485],
    image: '/images/landmarks/villagers-homeland.jpg',
    desc: '192栋两层别墅（每栋220平方米）和158套老年公寓。每栋别墅造价约30万元，仅以12.8万元卖给村民，差额由村集体补贴。被评为"江苏省村镇文明住宅小区"。',
    visiting: '住宅区，可外观参观'
  },
  {
    id: 4,
    name: '常盛工业园',
    category: 'industry',
    coordinates: [31.5658, 121.0470],
    image: '/images/landmarks/industrial-park.jpg',
    desc: '常盛集团所在地——江苏省最大的钢结构生产基地。从一条彩钢复合板生产线发展成年产值超10亿元的企业集团。产品连续五年荣获上海市建筑工程金属钢结构最高奖——金钢奖。',
    visiting: '预约参观工业旅游'
  },
  {
    id: 5,
    name: '有机稻种植基地',
    category: 'agriculture',
    coordinates: [31.5720, 121.0530],
    image: '/images/landmarks/organic-rice-base.jpg',
    desc: '1200亩认证有机稻田。不施化肥、不喷农药，采用"稻鸭鹅共作"生态模式，以绿萍为天然肥料。"蒋巷大米"售价每公斤20元，年产49万公斤。',
    visiting: '季节性观光，农耕体验游'
  },
  {
    id: 6,
    name: '江南农家民俗馆',
    category: 'culture',
    coordinates: [31.5690, 121.0500],
    image: '/images/landmarks/folk-museum.jpg',
    desc: '展示江南农村民俗文化的博物馆，陈列传统农具、生活用具，展现数十年来农村生活变迁。是了解江南地区农业文化的一扇窗口。',
    visiting: '免费参观'
  },
  {
    id: 7,
    name: '蒋巷书院',
    category: 'accommodation',
    coordinates: [31.5710, 121.0520],
    image: '/images/landmarks/jiangxiang-academy.jpg',
    desc: '常熟市首家中高端民宿度假酒店。28间现代简约又不失野趣的精致客房，坐落在宁静的乡村环境中。由专业设计和管理团队运营。',
    visiting: '住宿需提前预订'
  },
  {
    id: 8,
    name: '农民蔬菜园',
    category: 'agriculture',
    coordinates: [31.5665, 121.0510],
    image: '/images/landmarks/vegetable-garden.jpg',
    desc: '村民种植新鲜有机蔬菜的集体菜园。利用村庄循环经济系统的有机堆肥，无农药种植。游客可体验农耕活动和采摘时令蔬菜。',
    visiting: '季节性采摘体验'
  },
  {
    id: 9,
    name: '农民剧场',
    category: 'culture',
    coordinates: [31.5678, 121.0495],
    image: '/images/landmarks/farmer-theater.jpg',
    desc: '丰富村民文化生活的社区剧场。举办演出、电影放映和社区活动。是蒋巷"精神传家"发展理念的体现。',
    visiting: '公开活动，查看日程'
  },
  {
    id: 10,
    name: '嘎嘎部落',
    category: 'entertainment',
    coordinates: [31.5705, 121.0540],
    image: '/images/landmarks/gaga-tribe.jpg',
    desc: '生态园内的亲子主题乐园。设有游戏、教育活动和户外探险项目。是"党建+旅游"发展新模式的创新探索。',
    visiting: '需购票入园'
  },
  {
    id: 11,
    name: '荷塘长廊',
    category: 'nature',
    coordinates: [31.5695, 121.0505],
    image: '/images/landmarks/lotus-pond.jpg',
    desc: '风景秀丽的荷塘，蜿蜒的长廊穿行其间。夏日里荷花盛开，水面铺满碧绿，景色令人心旷神怡，是摄影和休闲的绝佳去处。',
    visiting: '免费开放，夏季最佳观赏期'
  },
  {
    id: 12,
    name: '护理院与老年公寓',
    category: 'welfare',
    coordinates: [31.5675, 121.0480],
    image: '/images/landmarks/nursing-home.jpg',
    desc: '158套老年公寓免费供老人居住，另有250个床位的护理院，提供医养结合服务。老人每月可领600至2300元养老金。被评为全国老年友好型社区。',
    visiting: '社会福利设施'
  }
]

export const landmarkCategories = [
  { value: 'all', label: '全部' },
  { value: 'nature', label: '自然生态' },
  { value: 'culture', label: '文化历史' },
  { value: 'agriculture', label: '农业观光' },
  { value: 'residential', label: '居住社区' },
  { value: 'industry', label: '工业园区' },
  { value: 'entertainment', label: '休闲娱乐' },
  { value: 'accommodation', label: '住宿度假' },
  { value: 'welfare', label: '民生福利' }
]
