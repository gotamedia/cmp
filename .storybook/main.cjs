const path = require('path')

const ROOT_DIR = path.resolve(__dirname, '..')

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
    },
    webpackFinal: async (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    "@components": path.resolve(ROOT_DIR, 'src/components/'),
                    "@contexts": path.resolve(ROOT_DIR, 'src/contexts/'),
                    "@hooks": path.resolve(ROOT_DIR, 'src/hooks/'),
                    "@utils": path.resolve(ROOT_DIR, 'src/utils/')
                }
            }
        }
    }
}
