const router = require('koa-router')()

router.get('/', async (ctx) => {
  const data = {
    title: '陈奕迅个人档案',
    user: {
      name: '陈奕迅',
      age: 15,
      sex: '男',
      html: '<a href="https://baike.baidu.com/item/%E9%99%88%E5%A5%95%E8%BF%85/128029?fr=aladdin">陈奕迅-百度百科</a>'
    },
    tags: ['歌手', '明星', '偶像']
  }
  await ctx.render('index', data)
})

module.exports = router
