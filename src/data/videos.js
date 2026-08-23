export const videos = [
  {
    id: 1,
    title: '蒋巷村社会实践',
    src: '/videos/jiangxiang-social-practice.mp4',
    poster: '/images/posters/social-practice.jpg',
    duration: '社会实践',
    category: 'main',
    desc: '一部展示蒋巷村社会实践经历的纪录片——探索村庄从贫困沼泽到乡村振兴典范的蜕变历程。',
    isLocal: true
  },
  {
    id: 2,
    title: '《焦点访谈》：蒋巷村的好书记',
    src: '',
    poster: '/images/history/chang-desheng-presentation.jpg',
    posterAlt: '常德盛介绍蒋巷村发展成果的公开报道图片',
    duration: '央视网官方页面',
    category: 'story',
    desc: '央视《焦点访谈》2010年节目，讲述常德盛带领蒋巷村发展工业、巩固农业并改善村民生活的历程。',
    isLocal: false,
    externalUrl: 'https://tv.cctv.com/2010/09/05/VIDEygs9Ou8DCQIknU0tpar3100905.shtml',
    sourceLabel: '央视网',
    externalAction: '前往央视网观看'
  }
]

export const videoCategories = [
  { value: 'all', label: '全部视频' },
  { value: 'main', label: '社会实践' },
  { value: 'story', label: '人物故事' }
]
