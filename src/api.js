import { AV } from '@/storage';

function loading (isStart = true) {
  isStart ? 
    wx.showLoading({
      mask: true
    })
    :
    wx.hideLoading()
}

// 获取文章列表
export const Get_Artical = () => {
  return new AV.Query('Artical').find();
}

// 新增标签
export const Set_Artical_Tag = (opt) => {
  return new AV.Query('Artical').find();
}