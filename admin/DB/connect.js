// 数据库的连接文件
// 连接数据库 27017 默认端口号
let dburl = 'mongodb+srv://weiwei:qwe666999@iamboss-2a9xe.mongodb.net/test?retryWrites=true&w=majority'
const mongoose = require('mongoose');
mongoose.connect(dburl,{useNewUrlParser: true,useUnifiedTopology: true ,useFindAndModify:false});

var db = mongoose.connection //数据库的连接对象
db.on('error',()=>{ console.log('数据库连接失败')});
db.once('open', function() {
  console.log('数据库第一次连接成功')
});

// 创建schema对象
let userSchema = mongoose.Schema({
  us: { type: String },
  ps: { type: String },
  
})

let model = mongoose.model('users', userSchema)

model.insertMany({ us: 'VV', ps: '666' })
  .then(() => {
  console.log('插入成功');
  })
  .catch(() => {
  console.log(err);
  })