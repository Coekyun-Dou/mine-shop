const {request} = require("../utils/request")
const{baseUrl,banner} = require("./base")
/**
 * 所有的网络请求方法都会放在这里边
 */

 /**
  * get banner data
  */

  function getBanner(data){
    return request(baseUrl + banner,"GET",data)
  }

  module.exports = {
    getBanner
  }