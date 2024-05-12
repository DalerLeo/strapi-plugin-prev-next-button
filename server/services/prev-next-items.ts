import { Strapi } from '@strapi/strapi';
import { transformEntry } from '../utils';

export default ({ strapi }: { strapi: Strapi }) => ({
  async getPrevNextItems(uid, id) {

    const { findConfiguration } = strapi.plugin('content-manager').service('content-types');
    const { settings: { mainField } } = await findConfiguration(strapi.contentType(uid));

    const [next, prev] = await Promise.all([
      strapi.entityService.findMany(uid, {
        fields: ['id', mainField],
        filters: { id: { $gt: id } },
        sort: { id: 'asc' },
        limit: 1,
      }),
      strapi.entityService.findMany(uid, {
        fields: ['id', mainField],
        filters: { id: { $lt: id } },
        sort: { id: 'desc' },
        limit: 1,
      })
    ]);

    return {
      prev: transformEntry(prev, mainField),
      next: transformEntry(next, mainField)
    };
  },
});
