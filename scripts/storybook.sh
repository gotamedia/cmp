#!/bin/bash

code="import { Source, Meta } from '@storybook/addon-docs'

<Meta
    title={'Introduction'}
    parameters={{
        options: {
            showToolbar: false
        }
    }}
/>
"

echo -e "$code\n$(cat ./README.md)" > .storybook/Introduction.stories.mdx