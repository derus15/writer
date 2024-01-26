import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': 'src',
            'app': '/src/app',
            'entities': '/src/entities',
            'feature': '/src/feature',
            'shared': '/src/shared',
            'widgets': '/src/widgets',
        },
    },
    base: './',
});