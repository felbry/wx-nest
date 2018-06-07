import { AV } from '@/storage';

// 获取文章列表
export const Get_Artical = () => {
  return new AV.Query('Artical').find();
}