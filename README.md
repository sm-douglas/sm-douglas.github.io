# Portfólio estático — Douglas Santana Mendonça

Versão em **HTML, CSS e JavaScript puro** (sem React, sem Tailwind, sem build).

## Estrutura

```
portfolio-static/
├── index.html                       # Página inicial (URL: /)
├── curriculo/
│   └── index.html                   # Página do CV (URL: /curriculo/)
├── pericia-forense/
│   └── index.html                   # Case 02 (URL: /pericia-forense/)
├── analise-rede-corporativa/
│   └── index.html                   # Case 03 (URL: /analise-rede-corporativa/)
├── curriculo.html                   # Redireciona para /curriculo/ (URL antiga)
├── pericia-forense.html             # Redireciona para /pericia-forense/ (URL antiga)
├── analise-rede-corporativa.html    # Redireciona para /analise-rede-corporativa/ (URL antiga)
├── sobre.html                       # Redireciona para /#sobre (URL antiga indexada)
├── sitemap.xml                      # Lista as URLs canônicas (limpas, sem .html)
├── robots.txt                       # Aponta o crawler para o sitemap.xml
├── css/
│   └── style.css
├── js/
│   └── script.js
├── ico/
│   └── favicon.ico
├── img/
│   ├── foto-hero.jpg
│   ├── foto-sobre.jpg
│   └── imagem-0X-pericia.jpg / imagem-0X-rede.jpg   # placeholders em branco, ainda não usados em nenhuma página
└── assets/
    └── curriculo-douglas.pdf
```

## URLs limpas (sem `.html`)

Cada página vive numa pasta com `index.html` dentro, então o GitHub Pages serve ela
sem extensão (ex: `sm-douglas.github.io/curriculo/`). Os arquivos `.html` que ainda
existem soltos na raiz são só *stubs* de redirecionamento (com
`<meta http-equiv="refresh">` e `<link rel="canonical">`), mantidos para não quebrar
links/bookmarks antigos e para o Google atualizar o índice para as novas URLs.

Se for criar uma página nova, siga o mesmo padrão: uma pasta com `index.html` dentro,
referenciando os recursos compartilhados com `../css/style.css`, `../js/script.js`,
`../ico/favicon.ico` e `../img/...` / `../assets/...`.

## Como usar

Abra `index.html` no navegador — não precisa de servidor. Para servir localmente:

```
cd portfolio-static
python3 -m http.server 5173
```

## Personalizar

- **Cores e tipografia:** edite as variáveis no topo de `css/style.css` (`:root`).
- **Fotos e CV:** substitua os arquivos em `img/` e `assets/` mantendo os mesmos nomes.
- **Textos:** todo o conteúdo está em `index.html` e em cada `index.html` dentro de `curriculo/`, `pericia-forense/` e `analise-rede-corporativa/`.
- **Tema claro/escuro:** alternância via botão no header, com preferência salva em `localStorage`.
- **Ícones:** biblioteca [Lucide](https://lucide.dev) via CDN, versão fixada em `1.39.0`.
