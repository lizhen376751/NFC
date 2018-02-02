var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scanCode: ""

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 监听页面初次渲染完成
   */
  onReady: function () {
    this.clickscan();
    console.log("初次渲染事件")

  },

  /**
   * 点击 tab 时触发
   */
  onTabItemTap: function () {
    this.clickscan();
    console.log("点击tab事件")

  },

  /**
   * 调用扫码事件
   */
  clickscan: function () {
    var that = this;
    wx.scanCode({
      success: (res) => {
        console.log("扫码成功:", res)
        that.setData({
          scanCode: res.result
        })
      },
      fail: function (res) {
        console.log("扫码失败:", res);
      }
    })
  }

})