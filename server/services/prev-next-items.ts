import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async getPrevNextItems(uid, id) {
    const next = await strapi.entityService.findMany(uid, {
      fields: ['id', 'name'],
      filters: { id: { $gt: id } },
      sort: {id: 'asc'},
      limit: 1,
    });
    const prev = await strapi.entityService.findMany(uid, {
      fields: ['id', 'name'],
      filters: { id: { $lt: id } },
      sort: {id: 'desc'},
      limit: 1,
    });
    return {prev: prev?.[0] || null, next: next?.[0] || null};
  },
});
