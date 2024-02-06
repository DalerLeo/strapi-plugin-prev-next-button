import pluginPkg from '../package.json';

const pluginId = pluginPkg.strapi.name //.replace(/^(@[^-,.][\w,-]+\/|strapi-)plugin-/i, '');

module.exports = pluginId;
