// pages/demo1/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {  picture: [
    'demo1_1.png',
    'demo1_2.png',
    'demo1_3.png'
  ], 
  indicatorDots: true,
  autoplay: true,
  interval: 5000,
  duration: 500,
  mode: 'center'


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },


  /*
  搜索栏点击事件
  */

  showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  hideInput: function () {
      this.setData({
          inputVal: "",
          inputShowed: false
      });
  },
    clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  },
  totitle1:function()
  {
    wx.navigateTo({
      url: '/pages/demo1/title1/title1',
    })

  },
  totitle2:function()
  {
    wx.navigateTo({
      url: '/pages/demo1/title2/title2',
    })

  },
  tolist1:function()
  {
    wx.navigateTo({
      url: '/pages/demo1/list1/list1',
    })

  }


})