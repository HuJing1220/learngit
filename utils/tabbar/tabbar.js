Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeIdx: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbarList: [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "/icon/index.png",
        "selectedIconPath": "/icon/index-act.png",
        "auth": 1
      },
      {
        "pagePath": "pages/classifyIndex/classifyIndex",
        "text": "分类",
        "iconPath": "/icon/classify.png",
        "selectedIconPath": "/icon/classify-act.png",
        "auth": 1
      },
      // {
      //   "pagePath": "pages/search/search",
      //   "text": "搜索",
      //   "iconPath": "/icon/search.png",
      //   "selectedIconPath": "/icon/search-act.png",
      //   "auth": 1
      // },
      {
        "pagePath": "pages/cart/cart",
        "text": "购物袋",
        "iconPath": "/icon/cart.png",
        "selectedIconPath": "/icon/cart-act.png",
        "auth": 1
      },
      {
        "pagePath": "pages/mine/mine",
        "text": "我的",
        "iconPath": "/icon/mine.png",
        "selectedIconPath": "/icon/mine-act.png",
        "auth": 1
      }
    ],
    _auth: 0,
    tabBarHeight: getApp().globalData.tabBarHeight,
    cartNum: false
  },
  lifetimes: {
    attached: function () {
      getApp().getconfig(this);
    }
  },
  ready: function () {
    console.log(this.data.cartNum)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getconfig(e) {
      this.setData({
        'tabbarList[2].auth': e.cartStatus
      })
    },
    handleItemTap(e) {
      const {
        idx,
        path
      } = e.currentTarget.dataset
      if (idx === this.data.activeIdx) return
      wx.switchTab({
        url: `/${path}`,
      })
    },
    showIcon() {
      this.setData({
        cartNum: wx.getStorageSync("currentAddCart").length == 0 ? false : true
      })
      console.log('cartNum', this.data.cartNum)
    }
  },
  //显示购物袋中的showIcon
  pageLifetimes: {
    show: function () {
      this.showIcon();
    }
  }
})
