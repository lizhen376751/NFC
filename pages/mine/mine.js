//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    worknum: 100,
    studentid: 20180569,
  },


  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 点击详情事件
   */
  clickdetails: function () {
    wx.showToast({
      title: '暂无您的信息!!!',
      image: "../../image/brushyard/cry.jpg",
      duration: 1000
    })
  },

  /**
   * 点击消费记录事件
   */
  consumptionclick: function () {
    wx.navigateTo({
      url: '../log/log?title=消费'
    })
  },

  /**
   * 点击门禁事件
   */
  guardclick: function () {
    wx.navigateTo({
      url: '../log/log?title=门禁'
    })
  },
  /**
   * 点击签到事件
   */
  singclick: function () {
    wx.navigateTo({
      url: '../log/log?title=签到'
    })
  },

  /**
   * 点击退出登录事件
   */
  exitclick: function () {
    wx.showModal({
      title: '提示',
      content: '确定退出?',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '退出成功!',
            inco: "success",
            duration: 2000,
            success:function(){
              wx.switchTab({
                url: '../brushyard/brushyard'
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
