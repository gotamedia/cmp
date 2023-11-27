module.exports = {
    stories: [
        './**/*.stories.mdx',
        '../**/*.stories.tsx'
    ],
    addons: [
        '@storybook/addon-essentials'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    }
}