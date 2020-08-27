//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    // motto: '我的小程序',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'https://imgm.gmw.cn/attachement/jpg/site215/20200827/4517095181505481979.jpg',
      'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg',
      'https://imgm.gmw.cn/attachement/jpg/site215/20200827/4517095181505481979.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    prolist: [{
      logo: 'https://imgm.gmw.cn/attachement/jpg/site215/20200827/4517095181505481979.jpg.jpg',
      title: '商品1',
      desc: '2'
    }, {
      logo: 'https://imgm.gmw.cn/attachement/jpg/site215/20200827/4517095181505481979.jpg',
      title: '商品2',
      desc: '3'
    }, {
      logo: 'https://imgm.gmw.cn/attachement/jpg/site215/20200827/4517095181505481979.jpg',
      title: '商品3',
      desc: '1'
    }, {
      logo: 'https://imgm.gmw.cn/attachement/jpg/site215/20200827/4517095181505481979.jpg',
      title: '商品4',
      desc: '8'
    }, {
      logo: 'https://imgm.gmw.cn/attachement/jpg/site215/20200827/4517095181505481979.jpg',
      title: '商品5',
      desc: '9'
    }, {
      logo: 'https://imgm.gmw.cn/attachement/jpg/site215/20200827/4517095181505481979.jpg',
      title: '商品6',
      desc: '12'
    }]
  },
  onPullDownRefresh: function() {
   
   
    wx.showModal({
      title: '顾客你好',
      content: '今天心情好吗？已刷新您的心情',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({
            title: '确定',
          })
        } else if(res.cancel){
          wx.showToast({
            title: '取消',
          })
        }
      }
    })
    wx.stopPullDownRefresh();
    console.log('刷新');
  },

  onReachBottom: function() {
    // Do something when page reach bottom.
    console.log('circle 下一页');
  },
  onLoad: function() {
    this.setData({
      test: '01',
    })
  },
  toData: function(e) {
    var index = e.currentTarget.dataset.index

    wx.showToast({
      title: '图片第' + index + '个',
    })

  },
  bt: function(e) {
    var index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/detail/detail',
    }) 
  },
  // 点击方法
  toDetail: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
  }, 
  banner:function(e){
   var index = e.currentTarget.dataset.index;

     wx.showToast({
       title: '第' + index+'个banner',
     })
  }























  // },
  // //事件处理函数
  // bindViewTap: function() {
  //   // this.data.userInfo.nickName = "sssss";
  //   // this.setData({ userInfo: this.data.userInfo})
  //    wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  //   //  wx.scanCode({
  //   //    success: (res) => {
  //   //      console.log(res)
  //   //    }
  //   //  })

  //   //地址获取
  //   //  wx.getLocation({
  //   //    type: 'wgs84',
  //   //    success: (res) => {
  //   //      var latitude = res.latitude // 经度
  //   //      var longitude = res.longitude // 纬度
  //   //    }
  //   //  })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  // onShareAppMessage: function(){
  //   return{
  //         title:'分享标题',
  //         path:'page/user?id=123',
  //   }

  // },


})