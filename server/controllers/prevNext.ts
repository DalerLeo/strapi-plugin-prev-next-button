import { Strapi } from '@strapi/strapi';
import isNumber from 'lodash/isNumber';
const pluginId = require('../pluginId');

export default ({ strapi }: { strapi: Strapi }) => ({
  async items(ctx) {
    if(!ctx.params.uid || !isNumber(Number(ctx.params.id))) {
      console.warn("CTX: ", {params: ctx.params, ctx: !isNumber(Number(ctx.params.id))})
      ctx.throw(400, 'uid and id are required');
    }

    console.warn("DALERLEO: ", pluginId)
    const prevNextItems = await strapi
      .plugin(pluginId)
      .service('prevNextItems')
      .getPrevNextItems(ctx.params.uid, ctx.params.id);
      
      ctx.type = 'application/json; charset=utf-8';
      ctx.send(prevNextItems);
  },
});
