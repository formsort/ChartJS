// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ChartJS-custom-question/',
  plugins: [],
  optimizeDeps: {
    include: [
      // List specific Chart.js modules if necessary
      'chart.js',
    ],
    // You can also exclude if certain modules cause issues
    // exclude: []
  },
  build: {
    rollupOptions: {
      // Ensure tree shaking is enabled
      treeshake: true,
    },
  },
});
