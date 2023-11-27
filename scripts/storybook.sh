#!/bin/bash

INTRODUCTION_CODE="import { Source, Meta } from '@storybook/addon-docs'

<Meta
    title={'Introduction'}
    parameters={{
        options: {
            showToolbar: false
        }
    }}
/>
"

CHANGELOG_CODE="import { Source, Meta } from '@storybook/addon-docs'

<Meta
    title={'CHANGELOG'}
    parameters={{
        options: {
            showToolbar: false
        }
    }}
/>
"

echo -e "$INTRODUCTION_CODE\n$(cat ./README.md)" > .storybook/Introduction.stories.mdx
echo -e "$CHANGELOG_CODE\n$(cat ./CHANGELOG.md)" > .storybook/CHANGELOG.stories.mdx