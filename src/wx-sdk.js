export function wx_showToast (opt) {
  wx.showToast({
    title: opt.title,
    icon: opt.icon || 'none',
    mask: true,
    success: opt.success
  });
}