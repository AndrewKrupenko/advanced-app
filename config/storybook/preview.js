import { addDecorator } from '@storybook/react';

import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator); // add styles from app/styles/index.scss to storybook
addDecorator(ThemeDecorator(Theme.LIGHT)); // pass global theme, later can change for specific story, example: OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
addDecorator(RouterDecorator); // for example navbar uses links but components are rendered isolated and to use router-dom functionality we should wrap component with router
