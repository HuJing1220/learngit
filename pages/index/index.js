const app = getApp()

Page({
  data: {
    nowPage: "firstPage",
    nowIndex: 0,
    tabBar: [
      {
        "iconClass": "iconfont icon-home ",
        "text": "首页",
        "tapFunction": "toFirst",
        "active": "active"
      },
      {
        "iconClass": "iconfont icon-we",
        "text": "广场",
        "tapFunction": "toSecond",
        "active": ""
      },
      {
        "iconClass": "iconfont icon-roundadd",
        "text": "发布",
        "tapFunction": "toThird",
        "active": ""
      },
      {
        "iconClass": "iconfont icon-service",
        "text": "消息",
        "tapFunction": "toFour",
        "active": ""
      },
      {
        "iconClass": "iconfont icon-emoji",
        "text": "我的",
        "tapFunction": "toFive",
        "active": ""
      }
    ]
  },
  onLoad: function () {

  },
  toFirst() {
    this.setData({
      nowPage: "firstPage",
      nowIndex: 0
    })
  },
  toSecond() {
    this.setData({
      nowPage: "secondPage",
      nowIndex: 1
    })
  },
  toThird() {
    this.setData({
      nowPage: "thirdPage",
      nowIndex: 2
    })
  },
  toFour() {
    this.setData({
      nowPage: "fourtPage",
      nowIndex: 3
    })
  },
  toFive() {
    this.setData({
      nowPage: "fivetPage",
      nowIndex: 4
    })
  },
})
