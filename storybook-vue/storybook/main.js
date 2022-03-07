//main.js

module.exports = {
    stories: ["./stories/*.js"],
    addons: [
        // "@storybook/addon-storysource",
        "@storybook/addon-actions",
        "@storybook/addon-viewport",
        "@storybook/addon-notes",
        "@storybook/addon-controls",
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
};
//stories:[""];中指明“故事书”的路径，路径可以自定义
//addons中为引入的插件