import pluginPkg from '../../package.json';

// const pluginId = pluginPkg.name.replace(/^(@[^-,.][\w,-]+\/|strapi-)plugin-/i, '');
const pluginId = pluginPkg.strapi.name 
export default pluginId;
