Page({

  /**
   * 页面的初始数据
   */
  data: {
    haveGetRecord: false,
    envId: '',
    update_time:'',
    record: '',
    buffett_index:'',
    ten_year_bond_yield:''
  },

  onLoad(options) {
  },

  onShow() {
    wx.showLoading({
      title: '',
    });
    console.log(111);
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      data: {
        type: 'selectRecord'
      }
    }).then((resp) => {
      console.log(resp);
      this.setData({
        update_time: resp.result.data[0].update_time,
        buffett_index: resp.result.data[0].buffett_index,
        ten_year_bond_yield: resp.result.data[0].ten_year_bond_yield,
        record: resp.result.data[0].index_valuation
      });
      wx.hideLoading();
    }).catch((e) => {
      console.log(e);
      wx.hideLoading();
    });
  },

  updateRecord() {
    wx.showLoading({
      title: '',
    });
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      data: {
        type: 'updateRecord',
      }
    }).then((resp) => {
      this.setData({
        update_time: resp.result.data[0].update_time,
        buffett_index: resp.result.data[0].buffett_index,
        ten_year_bond_yield: resp.result.data[0].ten_year_bond_yield,
        record: resp.result.data[0].index_valuation
      });
      wx.hideLoading();
    }).catch((e) => {
      console.log(e);
      wx.hideLoading();
    });
  },
});
