import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { storybookNextJsPlugin } from '@storybook/experimental-nextjs-vite/vite-plugin';

// More info at: https://storybook.js.org/docs/writing-tests/vitest-plugin
export default defineConfig({
  plugins: [
    // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
    storybookTest({ configDir: 'apps/my-new-app/.storybook/' }),
    // More info at: https://github.com/storybookjs/vite-plugin-storybook-nextjs
    storybookNextJsPlugin(),
  ],
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright',
    },
    coverage: {
      // all: false,
      reporter: ['text', 'lcov'],
      include: [
        'apps/my-new-app/app/**/*.ts',
        'apps/my-new-app/app/**/*.tsx',
        'libs/src/**/*.js',
        'libs/src/**/*.ts',
      ], // app 配下のみを対象
      exclude: [
        'apps/my-new-app/app/**/*.stories.tsx', // stories を除外
        'apps/my-new-app/app/**/*.test.tsx', // テストファイルを除外
      ],
    },
    // Make sure to adjust this pattern to match your stories files.
    include: ['**/*.stories.?(m)[jt]s?(x)'],
    setupFiles: ['apps/my-new-app/.storybook/vitest.setup.ts'],
  },
});
