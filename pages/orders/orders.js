// pages/orders/orders.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 总价
    totalprice: 0,
    // 每个item对应的总价\
    prices:[0,0,0],
    // 数量
    numbers:[0,0,0],
    itemData:[
      {
        id:1,
        price:15.00,
        name:"特色麻辣兔头",
        subname:"只发重庆四川等地",
        format:"2只"
      },
      {
        id: 2,
        price: 22.00,
        name: "特色凉拌麻辣鸡翅",
        subname: "只发重庆四川等地",
        format: "2只"
      },
      {
        id: 3,
        price: 18.00,
        name: "干过香辣兔丁",
        subname: "只发重庆四川等地",
        format: "2只"
      },
    ]   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  /**
  * 减
  */
  decade: function(e) {
    // console.log("decade--",e.target.dataset.index)
    let i = e.target.dataset.index  
    if (this.data.numbers[i] == 0) {
      this.data.numbers[i] = 0
    }else{
      --this.data.numbers[i]  
    }
    this.setData({
      numbers: this.data.numbers
    })
    console.log("decade---",this.data.numbers[i])
    this.data.prices[i] = this.data.prices[i] - this.data.itemData[i].price
    this.updatePrice()
    
  },
  /**
   * 加
   */
  add: function (e){
    let i = e.target.dataset.index
    ++this.data.numbers[i]
    this.setData({
      numbers: this.data.numbers
    })
    console.log("add---", this.data.numbers[i])
    this.data.prices[i] =  this.data.itemData[i].price * this.data.numbers[i] 
    this.updatePrice();
   
  },
  updatePrice:function(){
    let data = 0;
    this.data.prices.forEach(function(ele){
      data += ele
    })
    this.setData({
      totalprice: data
    })
  },
  /**
   * 输入框的值
   */
  bindKeyInput:function(e){
    let i = e.target.dataset.index
    console.log(e.target)
    let data = e.detail.value > 999 ? 999 : e.detail.value
    let number = "numbers["+i+"]"
    // 数据更新后才会渲染到页面中
    this.setData({
      [number]: data
    })
    // 数据更新后需要重新计算价格
    this.data.prices[i] = this.data.itemData[i].price * this.data.numbers[i] 
    this.updatePrice()
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
  
  }
})