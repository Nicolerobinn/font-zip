const Fontmin = require('fontmin')

const text = ``
const fontmin = new Fontmin()
  // 字体文件路径
  .src('*.ttf')
  // 中间件
  .use(Fontmin.glyph({
    text: text
  }))
  // 输出
  .dest('build/')

fontmin.run(function (err, files) {
  if (err) throw err
  console.log(files)
})
