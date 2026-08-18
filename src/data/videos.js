export const videos = [
  {
    id: 1,
    title: 'Jiangxiang Village Social Practice',
    titleCN: '蒋巷村社会实践',
    src: '/videos/jiangxiang-social-practice.mp4',
    poster: '/images/posters/social-practice.svg',
    duration: 'Social Practice',
    category: 'main',
    desc: 'A documentary showcasing the Jiangxiang Village social practice experience — exploring the village\'s transformation from a poor swamp to a model of rural revitalization.',
    isLocal: true
  },
  {
    id: 2,
    title: 'Jiangxiang Village Overview',
    titleCN: '蒋巷村概览',
    src: '',
    poster: '/images/posters/village-overview.svg',
    duration: 'External',
    category: 'overview',
    desc: 'An aerial overview of Jiangxiang Village\'s beautiful landscape — villas, rice fields, ecological park, and waterways of the Jiangnan water town.',
    isLocal: false,
    externalUrl: 'https://player.bilibili.com/player.html?bvid=BV1xV411B7oP'
  },
  {
    id: 3,
    title: 'Organic Rice Farming',
    titleCN: '有机稻种植',
    src: '',
    poster: '/images/posters/organic-farming.svg',
    duration: 'External',
    category: 'agriculture',
    desc: 'A look at Jiangxiang\'s 1,200 mu organic rice fields — duck-goose coexistence farming, duckweed fertilizer, and sustainable agriculture in action.',
    isLocal: false,
    externalUrl: ''
  },
  {
    id: 4,
    title: 'Chang Desheng Story',
    titleCN: '常德盛的故事',
    src: '',
    poster: '/images/posters/chang-story.svg',
    duration: 'External',
    category: 'story',
    desc: 'The inspiring story of Chang Desheng — 58 years of leading Jiangxiang Village from poverty to prosperity with unwavering dedication.',
    isLocal: false,
    externalUrl: ''
  }
]

export const videoCategories = [
  { value: 'all', label: 'All Videos' },
  { value: 'main', label: 'Social Practice' },
  { value: 'overview', label: 'Village Overview' },
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'story', label: 'People & Stories' }
]

export const embedConfig = {
  miniProgram: {
    note: 'Copy this embed code to use in WeChat Mini Programs. Replace the VIDEO_URL with your hosted video URL.',
    template: '<video src="{{VIDEO_URL}}" controls poster="{{POSTER_URL}}" style="width:100%;"></video>'
  },
  web: {
    note: 'Embed code for web pages and blog posts.',
    template: '<iframe src="{{VIDEO_URL}}" width="640" height="360" frameborder="0" allowfullscreen></iframe>'
  }
}
