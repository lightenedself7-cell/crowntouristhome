import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { execSync } from 'child_process';

// Exact vector recreation matching the user's uploaded "Regal Gold Crown App Icon.png"
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <!-- Background luxury cream gradient -->
    <linearGradient id="creamBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FCFAF5"/>
      <stop offset="100%" stop-color="#F6EFE3"/>
    </linearGradient>

    <!-- Warm gold frame gradient -->
    <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#CA972F"/>
      <stop offset="50%" stop-color="#B88628"/>
      <stop offset="100%" stop-color="#9C6B16"/>
    </linearGradient>

    <!-- Left side illuminated gold gradient -->
    <linearGradient id="goldLight" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#F5D478"/>
      <stop offset="40%" stop-color="#E0AD39"/>
      <stop offset="100%" stop-color="#B9811F"/>
    </linearGradient>

    <!-- Right side shadowed gold gradient -->
    <linearGradient id="goldDark" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#C58E26"/>
      <stop offset="45%" stop-color="#A26D16"/>
      <stop offset="100%" stop-color="#7B4C0A"/>
    </linearGradient>

    <!-- Base band metallic horizontal gradient -->
    <linearGradient id="goldBase" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9A6510"/>
      <stop offset="15%" stop-color="#D7A434"/>
      <stop offset="50%" stop-color="#FCE18A"/>
      <stop offset="85%" stop-color="#D7A434"/>
      <stop offset="100%" stop-color="#8F5D0A"/>
    </linearGradient>

    <!-- Emerald Gemstone Left Facet -->
    <linearGradient id="gemLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#349463"/>
      <stop offset="100%" stop-color="#1E653F"/>
    </linearGradient>

    <!-- Emerald Gemstone Right Facet -->
    <linearGradient id="gemDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A5837"/>
      <stop offset="100%" stop-color="#0E351F"/>
    </linearGradient>

    <!-- Left Pearl (highlight upper-left) -->
    <radialGradient id="pearlLeft" cx="35%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#FFF3B8"/>
      <stop offset="45%" stop-color="#E2B23F"/>
      <stop offset="100%" stop-color="#8F5C0D"/>
    </radialGradient>

    <!-- Right Pearl -->
    <radialGradient id="pearlRight" cx="35%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#FFF0A8"/>
      <stop offset="45%" stop-color="#D7A232"/>
      <stop offset="100%" stop-color="#82520A"/>
    </radialGradient>
  </defs>

  <!-- Warm Cream Rounded Card Container with Gold Border -->
  <rect x="18" y="18" width="476" height="476" rx="98" fill="url(#creamBg)" stroke="url(#goldBorder)" stroke-width="18"/>

  <!-- ================= REGAL CROWN SILHOUETTE ================= -->
  <g id="crown">
    <!-- 1. Lower Arched Base Rim -->
    <path d="M 104 394 Q 256 348 408 394 C 404 382 400 374 396 368 Q 256 324 116 368 C 112 374 108 382 104 394 Z" fill="url(#goldBase)"/>

    <!-- 2. Main Crown Base Band -->
    <path d="M 102 366 Q 256 318 410 366 L 412 342 Q 256 296 100 342 Z" fill="url(#goldBase)"/>

    <!-- 3. Left Outer Wing with graceful outward sweep -->
    <path d="M 100 342 C 86 304 68 266 76 246 C 84 244 92 248 102 256 C 112 268 118 284 126 314 C 116 324 106 334 100 342 Z" fill="url(#goldLight)"/>

    <!-- 4. Right Outer Wing (Mirror) -->
    <path d="M 412 342 C 426 304 444 266 436 246 C 428 244 420 248 410 256 C 400 268 394 284 386 314 C 396 324 406 334 412 342 Z" fill="url(#goldDark)"/>

    <!-- 5. Left Outer Pearl / Orb -->
    <circle cx="58" cy="226" r="18" fill="url(#pearlLeft)"/>

    <!-- 6. Right Outer Pearl / Orb -->
    <circle cx="454" cy="226" r="18" fill="url(#pearlRight)"/>

    <!-- 7. Left Mid S-Curve Leaf (Outward flare) -->
    <path d="M 128 322 C 148 290 172 244 178 224 C 174 246 164 280 146 312 C 140 316 134 320 128 322 Z" fill="url(#goldLight)"/>

    <!-- 8. Right Mid S-Curve Leaf (Mirror) -->
    <path d="M 384 322 C 364 290 340 244 334 224 C 338 246 348 280 366 312 C 372 316 378 320 384 322 Z" fill="url(#goldDark)"/>

    <!-- 9. Left Flourish Petal (Major outward arching royal wing) -->
    <path d="M 164 316 C 172 268 198 192 242 168 C 248 166 248 174 242 184 C 220 220 216 260 234 274 C 208 288 180 304 164 316 Z" fill="url(#goldLight)"/>

    <!-- 10. Right Flourish Petal (Mirror) -->
    <path d="M 348 316 C 340 268 314 192 270 168 C 264 166 264 174 270 184 C 292 220 296 260 278 274 C 304 288 332 304 348 316 Z" fill="url(#goldDark)"/>

    <!-- 11. Central Fleur Spire - Left Facet (Light Gold) -->
    <path d="M 256 80 C 252 108 220 144 212 168 C 206 190 216 210 238 215 C 248 217 254 216 256 215 Z" fill="url(#goldLight)"/>

    <!-- 12. Central Fleur Spire - Right Facet (Deep Gold - Mirror) -->
    <path d="M 256 80 C 260 108 292 144 300 168 C 306 190 296 210 274 215 C 264 217 258 216 256 215 Z" fill="url(#goldDark)"/>

    <!-- 13. Emerald Gemstone - Central Rhombus Diamond -->
    <!-- Left Facet (Illuminated Emerald) -->
    <polygon points="256,240 232,276 256,312" fill="url(#gemLight)"/>
    <!-- Right Facet (Deep Forest Green) -->
    <polygon points="256,240 280,276 256,312" fill="url(#gemDark)"/>
  </g>
</svg>`;

async function generate() {
  const publicDir = path.resolve('public');
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent.trim());

  const sizes = [
    { name: 'favicon-512x512.png', size: 512 },
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon.png', size: 32 },
  ];

  for (const item of sizes) {
    await sharp(Buffer.from(svgContent))
      .resize(item.size, item.size, { fit: 'contain' })
      .png()
      .toFile(path.join(publicDir, item.name));
  }

  // Generate multi-size favicon.ico
  execSync('convert public/favicon-16x16.png public/favicon-32x32.png public/favicon-48x48.png public/favicon.ico');
  console.log('All favicons successfully generated!');
}

generate().catch(console.error);
