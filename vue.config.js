const userData = require('./src/mock/user.json')
const bodyParser = require('body-parser')

module.exports = {
    devServer: {
        before(app) {
            app.post('/login', bodyParser.json(), (req, res) => {
                console.log(res.data)
                let { username, pwd } = req.body 
                let obj = userData.find(item => item.name === username)
                if(!obj) {
                    res.send({code: 0, msg: '用户不存在'})
                } else {
                    if(obj.pwd === pwd) {
                        res.send({
                            code: 1,
                            msg: '登陆成功'
                        }) 
                    } else {
                        res.send({
                            code: 0,
                            msg: '密码错误'
                        })
                    }
                }
            })
        }
    }
}