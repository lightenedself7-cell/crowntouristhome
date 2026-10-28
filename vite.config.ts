import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Ensures archive backups, source archives, and development artifacts
 * are never copied into the production dist directory for deployment.
 */
function excludeUnwantedProductionFiles(): Plugin {
  return {
    name: 'exclude-unwanted-production-files',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      if (!fs.existsSync(distDir)) return;

      const removeUnwanted = (dir: string) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            removeUnwanted(fullPath);
          } else {
            // Remove project archives, source zips, and development-only artifacts
            const isArchive = /\.(zip|tar(\.gz)?|tgz|7z|rar|bak|tmp)$/i.test(entry.name);
            const isDevArtifact = entry.name.startsWith('.DS_Store') || entry.name.endsWith('.map.orig');
            if (isArchive || isDevArtifact) {
              try {
                fs.unlinkSync(fullPath);
                console.log(`[production-cleaner] Excluded non-production file from dist: ${entry.name}`);
              } catch (err) {
                console.warn(`Failed to remove ${fullPath}:`, err);
              }
            }
          }
        }
      };

      removeUnwanted(distDir);
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), excludeUnwantedProductionFiles()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      emptyOutDir: true,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
