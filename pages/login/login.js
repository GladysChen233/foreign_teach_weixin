// pages/login/login.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#ccc',
          animation: {
            duration: 30,
            timingFunc: 'linear'
          }
      });


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  bindGetUserInfo: function(e){

    if (e.detail.userInfo) {
      let info = e.detail
      //用户按了允许授权按钮signature
      
      console.log(e)
      wx.login({
        success: function(d){
         
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid='+app.globalData.appId+'&secret='+app.globalData.appSecret+'&js_code='+d.code+'&grant_type=authorization_code',
            data: {},
            success: function(e){
              console.log(e)
              if(e.openid){
                wx.request({
                  url: '',
                  method: 'POST',
                  data: {
                    
                  },
                  success: function(res){}
                })
              }
              wx.setStorage({
                data: info,
                key: 'userInfo',
              })
              wx.setStorage({
                data: e.openid,
                key: 'openId',
              })
              wx.switchTab({
                url: '../index/index',
              })
            }
          })
        }
      })
      

      
  } else {
      //用户按了拒绝按钮
      wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
          showCancel: false,
          confirmText: '返回授权',
          success: function(res) {
              // 用户没有授权成功，不需要改变 isHide 的值
              if (res.confirm) {
                  console.log('用户点击了“返回授权”');
              }
          }
      });
  }

    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})