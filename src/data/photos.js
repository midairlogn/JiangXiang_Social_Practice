export const photoThemes = [
  { value: 'all', label: '全部主题', description: '从四季风光到村民日常，从田间生产到公共文化空间，这组影像共同记录乡村环境与生活方式的多重侧面。' },
  { value: 'spring', label: '春', description: '春日的新绿沿着田畴、水岸与村道舒展，农事重新启程，花木和湿润的土地为村庄带来清新而具体的生机。' },
  { value: 'summer', label: '夏', description: '夏季水网丰盈、草木浓密，荷塘、林荫与田园进入旺盛生长期，也让游憩、采摘等乡村生活更显活力。' },
  { value: 'autumn', label: '秋', description: '金黄稻田与机械收获构成秋日主景，成熟作物把一季耕耘转化为可见的成果，也呈现现代农业的效率。' },
  { value: 'winter', label: '冬', description: '冬日里的江南乡村少了浓绿，却多了围坐相聚的温度。厚衣、暖阳、团圆饭与迎福活动记录岁末生活，也让宁静村居显出朴素而真实的人情味。' },
  { value: 'life', label: '人民生活', description: '阅读、游憩、养老服务、文化参观与邻里活动交织在一起，呈现公共空间如何融入村民日常并增强社区联结。' },
  { value: 'scenery', label: '景致', description: '河塘、水巷、桥廊、绿化与错落民居共同构成江南乡村的空间底色，生态环境与宜居建设在景观中彼此呼应。' },
  { value: 'labor', label: '劳动', description: '从整田播种、田间管护到机械收割和手工制作，劳动影像呈现农业生产的节奏，也记录村庄发展的现实基础。' }
]

const newPhoto = (photo) => ({
  credit: '用户提供素材（public/media_new）；原始来源与授权状态待团队确认',
  mediaType: '新增乡村影像；具体地点待核验',
  ...photo
})

export const photos = [
  {
    id: 1,
    title: '有机稻田休耕期',
    season: 'spring',
    theme: 'scenery',
    src: '/images/photos/jiangxiang-organic-rice-fields.jpg',
    alt: '蒋巷村有机稻田休耕期的水田景观',
    credit: '公开报道图片，原始页面待补全',
    mediaType: '蒋巷村相关报道图；需要人工确认版权'
  },
  {
    id: 2,
    title: '绿萍肥田',
    season: 'spring',
    theme: 'labor',
    src: '/images/photos/duckweed-blanket.jpg',
    alt: '村民在铺满绿萍的有机稻田中查看土壤',
    credit: '人民网记者杨文全相关报道图',
    mediaType: '蒋巷村实景；需要人工确认版权'
  },
  {
    id: 3,
    title: '竹林景观',
    season: 'summer',
    theme: 'scenery',
    src: '/images/photos/bamboo-forest-path.jpg',
    alt: '茂密竹林仰视景观',
    credit: '现有仓库素材，原始来源未记录',
    mediaType: '地点待核验；需要人工确认版权'
  },
  {
    id: 4,
    title: '机械化水稻收割',
    season: 'autumn',
    theme: 'labor',
    src: '/images/photos/autumn-harvest-gold.jpg',
    alt: '收割机在稻田中进行机械化收割',
    credit: '现有仓库素材，原始来源未记录',
    mediaType: '江南农业场景，地点待核验；需要人工确认版权'
  },
  {
    id: 5,
    title: '田野白鹭',
    season: 'autumn',
    theme: 'scenery',
    src: '/images/photos/field-egret.jpg',
    alt: '白鹭栖息在湿润田野中',
    credit: '现有仓库素材，原始来源未记录',
    mediaType: '江南乡村生态示意，地点待核验；需要人工确认版权'
  },
  {
    id: 6,
    title: '生态园水上游乐',
    season: 'summer',
    theme: 'life',
    src: '/images/photos/jiangxiang-ecological-park-boating.jpg',
    alt: '蒋巷村生态园水面上的游船与岸边绿化',
    credit: '公开报道图片，原始页面待补全',
    mediaType: '蒋巷村生态园相关报道图；需要人工确认版权'
  },
  {
    id: 7,
    title: '生态园航拍',
    season: 'summer',
    theme: 'scenery',
    src: '/images/photos/jiangxiang-ecological-park-aerial.jpg',
    alt: '蒋巷村生态园绿地与水系的航拍景观',
    credit: '公开报道图片，原始页面待补全',
    mediaType: '蒋巷村生态园相关报道图；需要人工确认版权'
  },
  {
    id: 8,
    title: '果园采摘',
    season: 'summer',
    theme: 'life',
    src: '/images/photos/orchard-picking.jpg',
    alt: '孩子们在葡萄园体验采摘',
    credit: '新华网蒋巷村专题相关素材，具体图片链接待补全',
    mediaType: '蒋巷村采摘活动相关图；需要人工确认版权'
  },
  {
    id: 9,
    title: '乡村光伏应用',
    season: 'summer',
    theme: 'scenery',
    src: '/images/photos/solar-panel-array.jpg',
    alt: '农田旁设置的小型太阳能光伏板',
    credit: '现有仓库素材，原始来源未记录',
    mediaType: '通用乡村低碳素材，并非声称为蒋巷村实景；需要人工确认版权'
  },
  newPhoto({
    id: 10,
    title: '社区志愿服务',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/labor/community-volunteer-service.webp',
    alt: '志愿者在村道旁与居民交流服务事项'
  }),
  newPhoto({
    id: 11,
    title: '传统农具陈列',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/labor/traditional-farm-tools-display.webp',
    alt: '乡村展陈空间中的传统农具与生活器具'
  }),
  newPhoto({
    id: 12,
    title: '春日田间播种',
    season: 'spring',
    theme: 'labor',
    src: '/media_new/labor/spring-field-sowing.webp',
    alt: '劳动者在春季田块中进行播种作业'
  }),
  newPhoto({
    id: 13,
    title: '水稻田间管护',
    season: 'summer',
    theme: 'labor',
    src: '/media_new/labor/rice-field-care.webp',
    alt: '戴草帽的劳动者在水稻田中进行田间管护'
  }),
  newPhoto({
    id: 14,
    title: '稻田机械收获',
    season: 'autumn',
    theme: 'labor',
    src: '/media_new/labor/mechanical-rice-harvest.webp',
    alt: '收割机械在成片金黄稻田中作业的俯瞰景象'
  }),
  newPhoto({
    id: 15,
    title: '手工制作交流',
    season: 'year-round',
    theme: 'labor',
    src: '/media_new/labor/handicraft-workshop.webp',
    alt: '多人在室内共同参与手工制作活动'
  }),
  newPhoto({
    id: 16,
    title: '秋收作业现场',
    season: 'autumn',
    theme: 'labor',
    src: '/media_new/labor/autumn-harvest-operation.webp',
    alt: '农业机械在成熟稻田中推进收获作业'
  }),
  newPhoto({
    id: 17,
    title: '日常烹饪劳作',
    season: 'year-round',
    theme: 'labor',
    src: '/media_new/labor/village-kitchen-cooking.webp',
    alt: '两人在乡村厨房中共同进行食物烹饪'
  }),
  newPhoto({
    id: 18,
    title: '春耕整田',
    season: 'spring',
    theme: 'labor',
    src: '/media_new/labor/spring-plowing-tractor.webp',
    alt: '拖拉机在湿润田块中进行春耕整地作业'
  }),
  newPhoto({
    id: 19,
    title: '传统织造技艺',
    season: 'year-round',
    theme: 'labor',
    src: '/media_new/labor/traditional-weaving.webp',
    alt: '劳动者操作传统织机进行手工织造'
  }),
  newPhoto({
    id: 20,
    title: '乡村入口景观',
    season: 'year-round',
    theme: 'scenery',
    src: '/media_new/scenery/village-entrance-landscape.jpg',
    alt: '具有传统建筑风格的乡村公共空间入口'
  }),
  newPhoto({
    id: 21,
    title: '临水村居',
    season: 'summer',
    theme: 'scenery',
    src: '/media_new/scenery/riverside-village-houses.jpg',
    alt: '绿树与花木环绕的江南临水村居景观'
  }),
  newPhoto({
    id: 22,
    title: '白墙庭院通道',
    season: 'spring',
    theme: 'scenery',
    src: '/media_new/scenery/white-wall-courtyard-path.jpg',
    alt: '白墙圆门、竹篱与绿植构成的庭院通道'
  }),
  newPhoto({
    id: 23,
    title: '春水与水禽',
    season: 'spring',
    theme: 'scenery',
    src: '/media_new/scenery/spring-water-fowl.jpg',
    alt: '新柳掩映的乡村水面与游弋水禽'
  }),
  newPhoto({
    id: 24,
    title: '乡土院落陈设',
    season: 'year-round',
    theme: 'scenery',
    src: '/media_new/scenery/rustic-courtyard-display.jpg',
    alt: '保留传统生活器具与农作元素的乡土院落'
  }),
  newPhoto({
    id: 25,
    title: '石桥与村舍',
    season: 'summer',
    theme: 'scenery',
    src: '/media_new/scenery/stone-bridge-cottages.jpg',
    alt: '石板桥连接绿化水岸与乡村建筑'
  }),
  newPhoto({
    id: 26,
    title: '水岸晚霞',
    season: 'summer',
    theme: 'scenery',
    src: '/media_new/scenery/riverside-sunset.jpg',
    alt: '晚霞映照乡村河道与岸边树木的景象',
    mediaType: '新增江南水乡意象素材；具体地点待核验'
  }),
  newPhoto({
    id: 27,
    title: '村中水巷',
    season: 'summer',
    theme: 'scenery',
    src: '/media_new/scenery/village-water-alley.jpg',
    alt: '白墙村舍之间延伸的水巷与岸边绿化'
  }),
  newPhoto({
    id: 28,
    title: '村史文化空间',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/scenery/village-history-cultural-building.jpg',
    alt: '白墙灰瓦的乡村文化展陈建筑外观'
  }),
  newPhoto({
    id: 29,
    title: '水上游憩空间',
    season: 'summer',
    theme: 'life',
    src: '/media_new/scenery/water-recreation-space.webp',
    alt: '绿树与花带环绕的乡村水上游憩空间'
  }),
  newPhoto({
    id: 30,
    title: '夏日荷塘',
    season: 'summer',
    theme: 'scenery',
    src: '/media_new/scenery/summer-lotus-pond.jpg',
    alt: '水面铺满荷叶的夏日乡村荷塘'
  }),
  newPhoto({
    id: 31,
    title: '水网村落俯瞰',
    season: 'summer',
    theme: 'scenery',
    src: '/media_new/scenery/water-network-village-aerial.jpg',
    alt: '河道环绕村舍与绿地的江南村落俯瞰景观'
  }),
  newPhoto({
    id: 32,
    title: '水岸人家',
    season: 'summer',
    theme: 'scenery',
    src: '/media_new/scenery/waterside-houses.jpg',
    alt: '村舍、树木与水面倒影构成的安静水岸景象'
  }),
  newPhoto({
    id: 33,
    title: '花木景观造型',
    season: 'autumn',
    theme: 'scenery',
    src: '/media_new/scenery/floral-landscape-sculpture.webp',
    alt: '黄色花木与绿植组合成的乡村景观造型'
  }),
  newPhoto({
    id: 34,
    title: '绿树环抱的村居',
    season: 'year-round',
    theme: 'scenery',
    src: '/media_new/scenery/tree-surrounded-village.webp',
    alt: '成片绿树环抱整齐村居的俯瞰景观'
  }),
  newPhoto({
    id: 35,
    title: '林荫长廊',
    season: 'summer',
    theme: 'scenery',
    src: '/media_new/scenery/vine-shaded-corridor.jpg',
    alt: '藤蔓覆盖的乡村林荫长廊与步道'
  }),
  newPhoto({
    id: 36,
    title: '绿化村居',
    season: 'spring',
    theme: 'scenery',
    src: '/media_new/scenery/green-village-residences.jpg',
    alt: '草坪、树木与整洁住宅构成的乡村居住环境'
  }),
  newPhoto({
    id: 37,
    title: '树影下的民居',
    season: 'year-round',
    theme: 'scenery',
    src: '/media_new/scenery/tree-shadow-village-houses.jpg',
    alt: '树影掩映下整洁有序的乡村住宅外观'
  }),
  newPhoto({
    id: 39,
    title: '林下漫步',
    season: 'summer',
    theme: 'life',
    src: '/media_new/village-life/forest-boardwalk-stroll.jpg',
    alt: '行人在林木与花草环绕的木栈道上漫步'
  }),
  newPhoto({
    id: 40,
    title: '乡村阅读空间',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/village-reading-room.webp',
    alt: '设有书架、座椅与阅读灯的乡村公共阅读空间'
  }),
  newPhoto({
    id: 41,
    title: '林间亲子游乐',
    season: 'summer',
    theme: 'life',
    src: '/media_new/village-life/forest-family-recreation.webp',
    alt: '儿童与家人在林间体验户外游乐活动'
  }),
  newPhoto({
    id: 42,
    title: '稻米文化陈设',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/rice-culture-display.webp',
    alt: '以稻米文字元素呈现乡村农业文化的展陈'
  }),
  newPhoto({
    id: 43,
    title: '村级公共服务空间',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/village-public-service-center.webp',
    alt: '村级党群服务中心入口与公共服务标识'
  }),
  newPhoto({
    id: 44,
    title: '长者关怀服务',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/elderly-care-service.webp',
    alt: '社区工作人员与多位老人围坐交流'
  }),
  newPhoto({
    id: 45,
    title: '水杉林荫道',
    season: 'summer',
    theme: 'scenery',
    src: '/media_new/village-life/dawn-redwood-shaded-path.webp',
    alt: '高大水杉与花带围合的乡村林荫步道'
  }),
  newPhoto({
    id: 46,
    title: '传统学堂陈设',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/traditional-schoolhouse-display.webp',
    alt: '木质桌椅与匾额构成的传统学堂展陈空间'
  }),
  newPhoto({
    id: 47,
    title: '乡村参观交流',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/village-tour-exchange.webp',
    alt: '多人在户外乡村空间开展参观交流活动'
  }),
  newPhoto({
    id: 48,
    title: '社区美食活动',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/community-food-event.webp',
    alt: '公共活动中集中摆放的多种乡村餐食'
  }),
  newPhoto({
    id: 49,
    title: '文化展览参观',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/cultural-exhibition-visit.webp',
    alt: '参观者在室内文化展览空间观看影像与展品'
  }),
  newPhoto({
    id: 50,
    title: '集体参访留影',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/group-visit-photo.webp',
    alt: '参访群体在公共文化建筑前合影留念'
  }),
  newPhoto({
    id: 51,
    title: '书香文化一角',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/scholar-culture-corner.jpg',
    alt: '以书院文字和阅读元素布置的乡村文化空间'
  }),
  newPhoto({
    id: 52,
    title: '乡土文化院落',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/rustic-culture-courtyard.jpg',
    alt: '融入传统农居风格的乡土文化展示院落'
  }),
  newPhoto({
    id: 53,
    title: '公共文化活动',
    season: 'year-round',
    theme: 'life',
    src: '/media_new/village-life/public-cultural-activity.webp',
    alt: '村民在礼堂中参加公共文化交流活动'
  }),
  newPhoto({
    id: 54,
    title: '冬日迎福留影',
    season: 'winter',
    theme: 'life',
    src: '/media_new/winter/winter-fu-blessing-photo.webp',
    alt: '身着冬装的老人和孩子手持福字合影'
  }),
  newPhoto({
    id: 55,
    title: '岁末围桌相聚',
    season: 'winter',
    theme: 'life',
    src: '/media_new/winter/year-end-gathering.webp',
    alt: '身着冬装的人们围桌举杯相聚'
  }),
  newPhoto({
    id: 56,
    title: '冬日乡邻聚餐',
    season: 'winter',
    theme: 'life',
    src: '/media_new/winter/winter-neighborhood-dinner.webp',
    alt: '乡邻穿着厚外套在冬日暖阳下围桌用餐'
  })
]
