const bannerData = [
  {
    id: 1,
    url: "https://gitee.com/d___b/YSYL/raw/master/banner/1.jpg",
    descs: "测试",
  },
  {
    id: 2,
    url: "https://gitee.com/d___b/YSYL/raw/master/banner/2.png",
    descs: "测试",
  },
  {
    id: 3,
    url: "https://gitee.com/d___b/YSYL/raw/master/banner/3.jpg",
    descs: "测试",
  },
  {
    id: 4,
    url: "https://gitee.com/d___b/YSYL/raw/master/banner/4.jpg",
    descs: "测试",
  },
];

const goodsData = [
  {
    id: 1,
    title: "【顺丰老树大果】5斤双肩玉荷包大荔枝水果新鲜冷冻阳西现摘现发整箱",
    price: "49",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/1.webp",
    tag: "云荔爆款",
  },
  {
    id: 2,
    title: "现货妃子笑荔枝新鲜5斤顺丰礼盒白糖王水果当季整箱婴荔枝甜",
    price: "41.2",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/2.webp",
    tag: "云荔爆款",
  },
  {
    id: 3,
    title: "品粤石湾陶瓷一本万利荔枝摆件岭南特色工艺品开业乔迁庆典家居装",
    price: "788",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/3.webp",
    tag: "文创周边",
  },
  {
    id: 4,
    title: "广东妃子笑荔枝6斤新鲜水果当季顺丰包邮王白糖现摘桂糯米罂荔枝",
    price: "48.8",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/4.webp",
    tag: "云荔爆款",
  },
  {
    id: 5,
    title: "【紫云阁】广绣技艺商务伴手礼摆件手工刺绣熊猫荔枝文化工艺品",
    price: "580",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/5.webp",
    tag: "文创周边",
  },
  {
    id: 6,
    title: "甚良荔枝酒正宗发酵型果酒微醺女士低度甜酒晚安酒酿男人酒 5斤装",
    price: "68",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/6.webp",
    tag: "荔枝制品",
  },
  {
    id: 7,
    title: "茶宠物摆件变色荔枝茶台茶道文化可养禅意茶盘小泡茶茶桌装饰茶具",
    price: "27.9",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/7.webp",
    tag: "文创周边",
  },
  {
    id: 8,
    title: "长安的荔枝【赠荔枝鲜转运舆图】马伯庸口碑代表作书记正版全新",
    price: "25",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/8.webp",
    tag: "荔枝文化",
  },
  {
    id: 9,
    title: "荔枝新品种和高接换种技术图说 30个新品种高清彩色图解 零基础看懂",
    price: "15",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/9.webp",
    tag: "荔枝文化",
  },
  {
    id: 10,
    title: "荔枝谱(全2册) [宋]蔡襄 等 著 园艺专业科技正版图书籍",
    price: "78",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/10.webp",
    tag: "荔枝文化",
  },
  {
    id: 11,
    title: "广东桂味新鲜荔枝5斤精选高州水果茂名白罂糖妃笑子 5斤装荔枝",
    price: "37.8",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/11.webp",
    tag: "云荔爆款",
  },
  {
    id: 12,
    title: "云上游荔广东阳江茂名桂味荔枝【顺丰多地次日达】礼盒三斤S+果",
    price: "70.9",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/12.webp",
    tag: "云荔爆款",
  },
  {
    id: 13,
    title: "云上游荔新鲜冷冻白糖罂荔枝单果15g起广东老树荔枝当季水果礼盒",
    price: "78.3",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/13.webp",
    tag: "云荔爆款",
  },
  {
    id: 14,
    title: "胶缤荔枝汁NFC果汁果味冰荔枝浓郁鲜果大瓶送礼荔枝汁100%1.25L",
    price: "70.9",
    url: "https://gitee.com/d___b/YSYL/raw/master/goods/14.webp",
    tag: "荔枝制品",
  },
];

const categories = [
  {
    id: 1,
    tag: "新鲜荔枝",
    image: "https://gitee.com/d___b/YSYL/raw/master/category/r1.jpg",
    cate: "云荔爆款",
  },
  {
    id: 2,
    tag: "特惠荔枝",
    image: "https://gitee.com/d___b/YSYL/raw/master/category/r2.jpg",
    cate: "限时特惠",
  },
  {
    id: 3,
    tag: "妃子笑",
    image: "https://gitee.com/d___b/YSYL/raw/master/category/r3.png",
    cate: "限时特惠",
  },
  {
    id: 4,
    tag: "荔枝摆件",
    image: "https://gitee.com/d___b/YSYL/raw/master/category/r4.png",
    cate: "文创周边",
  },
  {
    id: 5,
    tag: "荔枝茶宠",
    image: "https://gitee.com/d___b/YSYL/raw/master/category/r5.jpg",
    cate: "文创周边",
  },
  {
    id: 6,
    tag: "蜀绣",
    image: "https://gitee.com/d___b/YSYL/raw/master/category/r6.jpg",
    cate: "文创周边",
  },
  {
    id: 7,
    tag: "荔枝书籍",
    image: "https://gitee.com/d___b/YSYL/raw/master/category/r7.png",
    cate: "荔枝文化",
  },
  {
    id: 8,
    tag: "鲜榨果汁",
    image: "https://gitee.com/d___b/YSYL/raw/master/category/r10.jpg",
    cate: "荔枝制品",
  },
];

const keywords = [
  { id: 1, content: "荔枝酒热销" },
  { id: 2, content: "桂味新鲜" },
  { id: 3, content: "荔枝摆件" },
  { id: 4, content: "荔枝茶宠" },
  { id: 5, content: "文创周边" },
  { id: 6, content: "荔枝文化" },
  { id: 7, content: "荔枝制品" },
  { id: 8, content: "妃子笑荔枝" },
];

const goodsDetails = [
  {
    id: 1,
    title: "【顺丰老树大果】5斤双肩玉荷包大荔枝水果新鲜冷冻阳西现摘现发整箱",
    price: "49",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/1.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d1-1.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d1-2.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d1-3.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d1-4.webp",
    ],
  },
  {
    id: 2,
    title: "现货妃子笑荔枝新鲜5斤顺丰礼盒白糖王水果当季整箱婴荔枝甜",
    price: "41.2",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/2.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d2-1.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d2-2.webp",
    ],
  },
  {
    id: 3,
    title: "品粤石湾陶瓷一本万利荔枝摆件岭南特色工艺品开业乔迁庆典家居装",
    price: "788",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/3.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d3-1.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d3-2.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d3-3.webp",
    ],
  },
  {
    id: 4,
    title: "广东妃子笑荔枝6斤新鲜水果当季顺丰包邮王白糖现摘桂糯米罂荔枝",
    price: "48.8",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/4.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d4-1.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d4-2.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d4-3.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d4-4.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d4-5.webp",
    ],
  },
  {
    id: 5,
    title: "【紫云阁】广绣技艺商务伴手礼摆件手工刺绣熊猫荔枝文化工艺品",
    price: "580",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/5.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d5-1.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d5-2.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d5-3.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d5-4.webp",
    ],
  },
  {
    id: 6,
    title: "甚良荔枝酒正宗发酵型果酒微醺女士低度甜酒晚安酒酿男人酒 5斤装",
    price: "68",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/6.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d6-1.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d6-2.webp",
    ],
  },
  {
    id: 7,
    title: "茶宠物摆件变色荔枝茶台茶道文化可养禅意茶盘小泡茶茶桌装饰茶具",
    price: "27.9",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/7.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d7-1.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d7-2.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d7-3.webp",
    ],
  },
  {
    id: 8,
    title: "长安的荔枝【赠荔枝鲜转运舆图】马伯庸口碑代表作书记正版全新",
    price: "25",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/8.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d8-1.webp",
    ],
  },
  {
    id: 9,
    title: "荔枝新品种和高接换种技术图说 30个新品种高清彩色图解 零基础看懂",
    price: "15",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/9.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d9-1.webp",
    ],
  },
  {
    id: 10,
    title: "荔枝谱(全2册) [宋]蔡襄 等 著 园艺专业科技正版图书籍",
    price: "78",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/10.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d10-1.webp",
    ],
  },
  {
    id: 11,
    title: "广东桂味新鲜荔枝5斤精选高州水果茂名白罂糖妃笑子 5斤装荔枝",
    price: "37.8",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/11.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d11-1.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d11-2.webp",
    ],
  },
  {
    id: 12,
    title: "云上游荔广东阳江茂名桂味荔枝【顺丰多地次日达】礼盒三斤S+果",
    price: "70.9",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/12.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d12-1.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d12-2.webp",
    ],
  },
  {
    id: 13,
    title: "云上游荔新鲜冷冻白糖罂荔枝单果15g起广东老树荔枝当季水果礼盒",
    price: "78.3",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/13.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d13-1.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d13-2.webp",
    ],
  },
  {
    id: 14,
    title: "胶缤荔枝汁NFC果汁果味冰荔枝浓郁鲜果大瓶送礼荔枝汁100%1.25L",
    price: "70.9",
    topimage: "https://gitee.com/d___b/YSYL/raw/master/goods/14.webp",
    details: [
      "https://gitee.com/d___b/YSYL/raw/master/details/d14-1.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d14-2.webp",
      "https://gitee.com/d___b/YSYL/raw/master/details/d14-3.webp",
    ],
  },
];

module.exports = {
  bannerData,
  goodsData,
  categories,
  keywords,
  goodsDetails,
};

