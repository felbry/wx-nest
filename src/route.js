import { AV } from '@/storage';

export default {
  '/get/artical': () => {
    return new AV.Query('Artical')
      .find()
      .then(results => {
        return {
          code: 0,
          data: results
        };
      });
  },
  '/post/artical/tag': async (opt) => {
    let query = new AV.Query('Tag');
    query.equalTo('name', opt.name);
    let len = await query
      .find()
      .then(results => results.length);
    if (len) {
      return Promise.resolve({
        code: 1,
        data: {
          msg: '标签已存在'
        }
      });
    }
    let tag = new AV.Object('Tag');
    tag.set('name', opt.name);
    return tag.save()
      .then(() => {
        return {
          code: 0
        };
      });
  }
}