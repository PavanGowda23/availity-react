import React from 'react';
import { Meta, Story } from '@storybook/react';
import icons from 'availity-uikit/fonts/config.json';

import Icon from '..';
// import README from '../README.md';

const sizes = ['lg', 'xl', '2x', '3x', '4x', '5x'];

const colors = [
  'none',
  'primary',
  'secondary',
  'danger',
  'warning',
  'dark',
  'white',
  'light',
  'success',
  'info',
  'muted',
];

const iconOptions = icons.glyphs.map((glyph) => glyph.css);

export default {
  title: 'Components/Icon',
  parameters: {
    docs: {
      // page: README,
    },
  },
} as Meta;

export const Default: Story = ({ name, size, color, hover }) => (
  <div className="py-3">
    <Icon name={name} size={size} color={color} onClick={hover ? () => ({}) : undefined} />
  </div>
);
Default.args = {
  name: 'home',
  size: '3x',
  color: 'none',
  hover: false,
};
Default.argTypes = {
  name: {
    type: 'select',
    options: iconOptions,
  },
  size: {
    type: 'select',
    options: sizes,
  },
  color: {
    type: 'select',
    options: colors,
  },
};
Default.storyName = 'default';
