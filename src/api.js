import ROUTE from '@/route';
import { wx_showToast } from '@/wx-sdk';

const WXRequest = (path, params = {}) => {
  wx.showLoading({
    mask: true
  });
  return ROUTE[path](params)
    .then(data => {
      wx.hideLoading();
      return new Promise((resolve, reject) => {
        if (data.code !== 0) {
          wx_showToast({
            title: data.data.msg
          });
          reject(data.data);
        }
        resolve(data.data);
      });
    });
}

// 获取文章列表
export const Get_Artical = () => { return WXRequest('/get/artical'); };
// 新增文章标签
export const Set_Tag = (opt) => { return WXRequest('/post/tag', opt); };
// 获取所有文章标签
export const Get_Artical_Tag = () => { return WXRequest('/get/artical/tag'); };
// 更新文章标签
export const Update_Artical_Tag = (opt) => { return WXRequest('/post/artical/tag', opt); };
// 获取所有照片标签
export const Get_Photo_Tag = () => { return WXRequest('/get/photo/tag'); };
