import { AV } from '@/storage';

function parseJson (data) {
  return JSON.parse(JSON.stringify(data));
}

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
  '/get/artical/tag': () => {
    return new AV.Query('Tag')
      .find()
      .then(results => {
        return {
          code: 0,
          data: results
        };
      });
  },
  '/post/tag': async (opt) => {
    let tagType = ['Tag', 'PhotoTag'];
    let query = new AV.Query(tagType[opt.type]);
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
    let tag = new AV.Object(tagType[opt.type]);
    tag.set('name', opt.name);
    return tag.save()
      .then(() => {
        return {
          code: 0
        };
      });
  },
  '/post/artical/tag': (opt) => {
    let artical = AV.Object.createWithoutData('Artical', opt.articalId);
    let tag = AV.Object.createWithoutData('Tag', opt.tagId);
    artical.set('tag', tag);
    return artical.save()
      .then(results => {
        return {
          code: 0
        };
      });
  },
  '/get/photo/tag': () => {
    return new AV.Query('PhotoTag')
      .find()
      .then(results => {
        return {
          code: 0,
          data: parseJson(results)
        };
      });
  },
}