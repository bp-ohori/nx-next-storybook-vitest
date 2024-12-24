import {Preview} from '@storybook/react'
import { withScreenshot } from 'storycap';

const preview: Preview = {}

preview.decorators = [
  withScreenshot(), // Registration the decorator is required
];

preview.parameters = {
  screenshot: {
    viewports: {
      LARGE: {
        width: 1200,
        height: 800,
      },
    },
  },
};

preview.tags = ["autodocs"];

export default preview