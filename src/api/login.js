import request from '../utils/request'

export default {//导出   export default export
    login(data){//登录接口
        return request({
            url:"/admin/login",//引入路径
            method:"post",//
            data:data
        })
    },
    //获取用户信息接口
    getUserInfo(){
        return request({
            url:"/user/info"
        })
    }
}