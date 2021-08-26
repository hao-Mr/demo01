let  environment  =  process.env.VUE_APP_ENV || 'production'
    // 根据环境引入不同配置 process.env.NODE_ENV
const config  = require('./env.' + environment)
console.log(config)
    // module.exports = config
module.exports =  config