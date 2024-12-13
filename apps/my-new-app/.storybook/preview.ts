import { withScreenshot } from 'storycap';

export const decorators = [
  withScreenshot, // Registration the decorator is required
];

export const parameters = {
  screenshot: {
    viewports: {
      LARGE: {
        width: 1200,
        height: 800,
      },
    },
  },
};

export const tags = ["autodocs"];