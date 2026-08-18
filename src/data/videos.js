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
    title: '蒋巷村概览',
    src: '',
    poster: '/images/posters/village-overview.jpg',
    duration: '外部链接',
    category: 'overview',
    desc: '蒋巷村美丽风光的航拍概览——别墅、稻田、生态园和江南水乡的水网河道。',
    isLocal: false,
    externalUrl: 'https://player.bilibili.com/player.html?bvid=BV1xV411B7oP'
  },
  {
    id: 3,
    title: '有机稻种植',
    src: '',
    poster: '/images/posters/organic-farming.jpg',
    duration: '外部链接',
    category: 'agriculture',
    desc: '走进蒋巷1200亩有机稻田——稻鸭鹅共作、绿萍肥田，可持续农业实践的真实记录。',
    isLocal: false,
    externalUrl: ''
  },
  {
    id: 4,
    title: '常德盛的故事',
    src: '',
    poster: '/images/posters/chang-story.jpg',
    duration: '外部链接',
    category: 'story',
    desc: '常德盛的感人故事——58年如一日带领蒋巷村从贫困走向富裕，以坚定的信念和无私的奉献书写乡村振兴篇章。',
    isLocal: false,
    externalUrl: ''
  }
]

export const videoCategories = [
  { value: 'all', label: '全部视频' },
  { value: 'main', label: '社会实践' },
  { value: 'overview', label: '村庄概览' },
  { value: 'agriculture', label: '农业生产' },
  { value: 'story', label: '人物故事' }
]
