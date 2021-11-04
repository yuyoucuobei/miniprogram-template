const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();

// 修改数据库信息云函数入口函数
exports.main = async (event, context) => {
  //获取bft index

  //获取10 year bond yield

  //获取index value list
  
  //写库
  try {
    // db.collection('base-info').add({
    //   // data 字段表示需新增的 JSON 数据
    //   data: {
    //     buffett_index: buffett_index,
    //     index_valuation: [
    //     ],
    //     ten_year_bond_yield: ten_year_bond_yield,
    //     update_time: new Date()
    //   }
    // })
    // .then(res => {
    //   console.log(res)
    // })
    
    return {
      success: true,
      data: event.data
    };
  } catch (e) {
    return {
      success: false,
      errMsg: e
    };
  }
};
