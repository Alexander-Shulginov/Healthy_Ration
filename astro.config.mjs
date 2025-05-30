// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
    integrations: [
        icon({
            iconDir: 'src/assets/svg',
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
