# Strapi plugin prev-next-button
<div style="text-align: center">
  <img style="width: 150px; height: auto;" src="public/logo-128.png" alt="Logo - Strapi Prev-Next Button" />
</div>


# Strapi Plugin Prev-Next Buttons
> Adds a Prev-Next Button to the edit view

## How to Install

Copy the following code and run from your terminal

```
#yarn
yarn add strapi-plugin-prev-next-button
```
```
#npm
npm install strapi-plugin-prev-next-button
```

Add the following attribute in the `config/plugins.js` file:
```
'prev-next-button': true
```
Or if you do not have the plugins.js file yet, add the file with the following contents:
```
module.exports = () => ({
  'prev-next-button': true,
});
```

## How to use
- ✨ After activation of the Plugin, click the Prev-Next Buttons will be available in the edit view for an easy navigation.
![](public/screenshot.png)


- ✨ Both buttons show prev/next entry title on hover. The title is read from `mainField` which is configured via Configure the view.
![](public/screenshot-tooltip.jpg)


- ✨ Current implementation sorts by ID. improvements are coming soon.

