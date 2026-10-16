# Lu Corrêa Animal Care — Site Institucional

Site institucional para clínica veterinária e estética animal, desenvolvido com **Next.js 16 (App Router)**, **React 19** e **Tailwind CSS 4**.

## ⚠️ DIAGNÓSTICO CRÍTICO ENCONTRADO — Leia antes de publicar novamente

O domínio atualmente publicado (`https://neon-pie-9b3fb8.netlify.app/`) retorna **HTTP 401** para QUALQUER visitante — incluindo o HTML, o CSS e todas as imagens — e redireciona para uma tela de login do Netlify (`.../edge-access?domain=...`). Isso foi confirmado via requisição HTTP direta (sem navegador, sem cache, sem autenticação).

Isso significa que o site inteiro está protegido pelo recurso **"Visitor Access" / "Site protection"** do próprio Netlify (Site settings → Visitor access / Password protection), não um bug de imagens. Para qualquer pessoa sem login no Netlify (ou sem a senha configurada), absolutamente nada aparece — nem fotos, nem texto, nem estilo.

**Como corrigir no painel do Netlify (obrigatório, fora do escopo do código):**
1. Acesse [app.netlify.com](https://app.netlify.com) → selecione o site `neon-pie-9b3fb8`.
2. Vá em **Site configuration → Visitor access** (ou **Site settings → Access control**).
3. Desative a proteção ("Disable visitor access control" / remova a senha).
4. Salve e acesse o site em uma aba anônima para confirmar que carrega sem pedir login.

Esse passo é indispensável — nenhuma correção de código resolve um bloqueio de acesso configurado no painel do Netlify.

## Sobre este projeto

Este é um site 100% de conteúdo institucional (brochure site): apresentação da marca, serviços, galeria, vídeos reais e contato via WhatsApp/Instagram. **Não depende de banco de dados em tempo de execução** — a página inicial (`/`) é pré-renderizada como conteúdo estático.

> O repositório mantém a infraestrutura de banco de dados (Drizzle + PostgreSQL) disponível em `src/db/`, pois faz parte do ambiente de desenvolvimento original, mas **nenhuma rota pública depende dela**.

## Estrutura de pastas

```
src/
  app/
    page.tsx          → Página única (todas as seções do site)
    layout.tsx         → Metadados, SEO, fontes
    globals.css         → Design tokens, paleta de cores, animações
    api/health/route.ts → Endpoint de verificação de saúde (estático)
  components/
    Header.tsx          → Cabeçalho com navegação e menu mobile
    Gallery.tsx          → Galeria com lightbox
    VideoSection.tsx     → Player de vídeos reais
    Hours.tsx            → Horários de atendimento com status "aberto agora"
    WhatsAppFloat.tsx    → Botão flutuante do WhatsApp
public/
  assets/
    logo/     → Logotipo oficial (jpg + webp)
    images/   → Fotografias reais da Lucy Corrêa e pets
    videos/   → Vídeos reais (atendimento e vacinação)
    posters/  → Imagens de capa dos vídeos
```

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção (modo servidor Next.js)

```bash
npm run build
npm start
```

## Publicação no Netlify

### Diagnóstico da falha anterior (fotos ausentes)

A causa raiz identificada: builds feitos via integração Git no Netlify (sem o export estático explícito) podem não copiar corretamente os arquivos de `public/assets/` para o runtime do Next.js 16 com Turbopack. A correção definitiva foi automatizar o export estático através do `netlify.toml`, eliminando qualquer passo manual que pudesse ser esquecido. Todos os arquivos de imagem e vídeo foram reverificados byte a byte (tamanho e assinatura binária) após o build — nenhum está corrompido, ausente ou com caminho incorreto.

### Opção 1 — Upload manual do ZIP já compilado (recomendado, mais simples e à prova de erros)

Use o arquivo **`lu-correa-animal-care-netlify.zip`**, com os arquivos finais já compilados (HTML, CSS, JS e todos os assets). Gerado com `next build` usando `output: "export"`, extraído novamente em uma pasta limpa e verificado arquivo por arquivo (tamanho, formato e caminho) antes da entrega.

1. Acesse [app.netlify.com](https://app.netlify.com).
2. Vá em **Sites → Add new site → Deploy manually**.
3. Arraste o arquivo `lu-correa-animal-care-netlify.zip` (ou extraia e arraste a pasta) na área de upload.
4. Aguarde a publicação e acesse o endereço gerado.

Não é necessário rodar `npm install` nem `npm run build` para essa opção — os arquivos já estão prontos para servir. **Esta é a forma mais confiável de publicar**, pois elimina qualquer variável do ambiente de build do Netlify.

### Opção 2 — Deploy contínuo via Git (agora 100% automático)

Use o **`lu-correa-animal-care-source.zip`** (código-fonte completo), que já inclui o arquivo `netlify.toml` configurado:

1. Extraia o ZIP e suba o conteúdo para um repositório Git.
2. Conecte o repositório ao Netlify ("Import an existing project").
3. O Netlify detecta automaticamente o `netlify.toml` na raiz, que já define:
   - **Build command:** `cp next.config.export.ts next.config.ts && npm run build`
   - **Publish directory:** `out`
4. Nenhuma configuração manual é necessária — o comando de build troca automaticamente para a configuração de export estático (`next.config.export.ts`) antes de compilar, garantindo que `public/assets/` seja incluído corretamente no resultado final.

> O `next.config.ts` do pacote-fonte permanece no modo servidor padrão (usado em desenvolvimento). O arquivo `next.config.export.ts` é a versão estática, acionada automaticamente pelo `netlify.toml` apenas durante o build no Netlify — sem necessidade de edição manual.

## Contato e integrações

- **WhatsApp:** +55 11 91187-9750 — mensagens pré-preenchidas por seção, abrindo em nova aba.
- **Instagram:** [@lucorrea_animalcare](https://www.instagram.com/lucorrea_animalcare)

## Assets originais

Todas as fotografias, vídeos e o logotipo utilizados são materiais reais fornecidos pela cliente, recuperados e incorporados ao projeto em `public/assets/`. Nenhuma imagem genérica foi utilizada.

## Observações importantes

- Não há preços, certificações, CRMV ou depoimentos informados — por não terem sido confirmados pela cliente.
- Os horários de atendimento devem ser sempre confirmados via WhatsApp.
- O indicador "aberto agora" é calculado no navegador do visitante com base no horário local.
