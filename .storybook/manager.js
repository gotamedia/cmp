import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

import gotaLogoLight from './gota-logo-light.svg'

const theme = create({
    base: 'dark',
    brandTitle: 'My custom Storybook',
    brandUrl: 'https://gotamedia.se/',
    brandImage: gotaLogoLight
})

addons.setConfig({
    theme: theme
})