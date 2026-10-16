// Gera src/generated/inline-images.ts com as fotografias e o logotipo
// embutidos em base64 (data URIs). Isso garante que as imagens apareçam
// no site publicado mesmo que a pasta /assets não seja enviada corretamente.
//
// Uso: node scripts/generate-inline-images.mjs
// (o arquivo gerado já é versionado; só rode novamente se trocar as fotos)

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const src = (p) => resolve(root, "public/assets/inline", p);

const files = {
  LOGO: "logo.webp",
  DOG01: "lucy-with-dog-01.webp",
  DOG02: "lucy-with-dog-02.webp",
  PORTRAIT: "lucy-portrait.webp",
  ADDITIONAL: "lucy-additional.webp",
  DOG01_THUMB: "lucy-with-dog-01-thumb.webp",
  DOG02_THUMB: "lucy-with-dog-02-thumb.webp",
  PORTRAIT_THUMB: "lucy-portrait-thumb.webp",
};

let out = "// ARQUIVO GERADO AUTOMATICAMENTE por scripts/generate-inline-images.mjs — não edite à mão.\n";
out += "// Fotografias reais da Lu Corrêa Animal Care embutidas como data URIs (WebP).\n\n";
for (const [name, file] of Object.entries(files)) {
  const b64 = readFileSync(src(file)).toString("base64");
  out += `export const ${name} = "data:image/webp;base64,${b64}";\n`;
}

const dest = resolve(root, "src/generated/inline-images.ts");
mkdirSync(dirname(dest), { recursive: true });
writeFileSync(dest, out);
console.log(`OK -> ${dest} (${(out.length / 1024).toFixed(0)} KB)`);
