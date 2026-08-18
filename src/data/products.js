export const products = [
  {
    id: 1,
    name: 'Jiangxiang Organic Rice',
    nameCN: '蒋巷有机大米',
    category: 'grain',
    price: '¥20/kg',
    unit: 'per kg',
    badge: 'Green Food Certified',
    desc: 'Grown in 1,200 mu of certified organic fields. No chemical fertilizers, no pesticides. Uses rice-duck-goose coexistence ecological farming with duckweed as natural fertilizer. Annual output: 490,000 kg. Price rose from ¥6 to ¥20/kg thanks to premium quality.',
    features: ['Organic certified', 'Duck-goose coexistence farming', 'Duckweed natural fertilizer', 'Single-season rotation system'],
    images: [
      '/images/products/organic-rice.svg',
      '/images/products/organic-rice.svg'
    ],
    packagingDesign: '/images/products/packaging-organic-rice.svg',
    packagingDesc: 'Eco-friendly kraft paper packaging featuring golden rice fields and the Jiangxiang Village logo. Emphasizes organic certification and the village\'s 50+ year agricultural heritage.'
  },
  {
    id: 2,
    name: 'Jiangxiang Green Vegetables',
    nameCN: '蒋巷绿色蔬菜',
    category: 'vegetable',
    price: 'Seasonal',
    unit: 'per kg',
    badge: 'Pollution-free',
    desc: 'Fresh vegetables grown in the Farmers\' Vegetable Garden using organic compost from the village\'s circular economy system. Pesticide-free, harvested daily, and available for visitor picking.',
    features: ['Organic compost', 'Daily harvest', 'Visitor picking available', 'Circular economy produce'],
    images: [
      '/images/products/green-vegetables.svg',
      '/images/products/green-vegetables.svg'
    ],
    packagingDesign: '/images/products/packaging-green-vegetables.svg',
    packagingDesc: 'Breathable mesh bag with recycled paper label. Natural green color scheme reflecting the eco-friendly farming method.'
  },
  {
    id: 3,
    name: 'Jiangxiang Rice Wine',
    nameCN: '蒋巷米酒',
    category: 'beverage',
    price: '¥58',
    unit: 'per bottle (500ml)',
    badge: 'Traditional Craft',
    desc: 'Brewed from Jiangxiang\'s own organic rice using traditional Jiangnan methods. A sweet, mellow rice wine that captures the essence of water-town culture.',
    features: ['Organic rice base', 'Traditional brewing', 'Jiangnan flavor', 'Handcrafted'],
    images: [
      '/images/products/rice-wine.svg',
      '/images/products/rice-wine.svg'
    ],
    packagingDesign: '/images/products/packaging-rice-wine.svg',
    packagingDesc: 'Elegant ceramic bottle with calligraphy-style labeling. Blue-and-white porcelain-inspired design evoking Jiangnan water town aesthetics.'
  },
  {
    id: 4,
    name: 'Jiangxiang Lotus Seed Tea',
    nameCN: '蒋巷莲子茶',
    category: 'beverage',
    price: '¥48',
    unit: 'per box (100g)',
    badge: 'Natural Wild',
    desc: 'Harvested from the lotus ponds of Jiangxiang Ecological Park. Naturally dried lotus seeds make a soothing, healthful tea rich in traditional wellness benefits.',
    features: ['Pond-harvested', 'Naturally dried', 'Wellness tea', 'Caffeine-free'],
    images: [
      '/images/products/lotus-seed-tea.svg',
      '/images/products/lotus-seed-tea.svg'
    ],
    packagingDesign: '/images/products/packaging-lotus-tea.svg',
    packagingDesc: 'Minimalist sliding-lid box with lotus pond watercolor illustration. Soft pink and green palette reflecting summer lotus season.'
  },
  {
    id: 5,
    name: 'Jiangxiang Seasonal Fruits',
    nameCN: '蒋巷时令鲜果',
    category: 'fruit',
    price: 'Seasonal',
    unit: 'per kg',
    badge: 'Tree-ripened',
    desc: 'Pears, peaches, grapes, and more from the ecological park orchards. Tree-ripened, hand-picked, and available for visitor fruit-picking experiences.',
    features: ['Orchard-grown', 'Tree-ripened', 'Picking experience', 'Seasonal varieties'],
    images: [
      '/images/products/seasonal-fruits.svg',
      '/images/products/seasonal-fruits.svg'
    ],
    packagingDesign: '/images/products/packaging-fruits.svg',
    packagingDesc: 'Recyclable wooden crate with natural jute handle. Watercolor fruit illustrations by season. Warm harvest-tone color palette.'
  },
  {
    id: 6,
    name: 'Changsheng Steel Components',
    nameCN: '常盛钢构件',
    category: 'industrial',
    price: 'Industrial',
    unit: 'by project',
    badge: 'Jiangsu Famous Brand',
    desc: 'Steel structural components for construction. The flagship product of Changsheng Group — Jiangsu Province\'s largest steel structure base. Winner of 5 consecutive Shanghai "Golden Steel Awards." Products sold across 20+ provinces.',
    features: ['Jiangsu famous brand', '5x Golden Steel Award', '20+ province coverage', 'Billion-yuan enterprise'],
    images: [
      '/images/products/steel-components.svg',
      '/images/products/steel-components.svg'
    ],
    packagingDesign: '/images/products/packaging-steel.svg',
    packagingDesc: 'Industrial-grade packaging with branded steel strapping. Features the "Changsheng" (常盛) trademark — Jiangsu Famous Trademark.'
  }
]

export const productCategories = [
  { value: 'all', label: 'All Products' },
  { value: 'grain', label: 'Grain & Rice' },
  { value: 'vegetable', label: 'Vegetables' },
  { value: 'fruit', label: 'Fruits' },
  { value: 'beverage', label: 'Beverages' },
  { value: 'industrial', label: 'Industrial' }
]
