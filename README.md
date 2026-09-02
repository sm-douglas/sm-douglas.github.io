# Portfólio estático — Douglas Santana Mendonça

Versão em **HTML, CSS e JavaScript puro** (sem React, sem Tailwind, sem build).

## Estrutura

```
portfolio-static/
├── index.html              # Marcação semântica (header, sections, footer)
├── curriculo.html          # Página do CV — download e pré-visualização do PDF
├── style.css                # Estilos com CSS custom properties (cores, fontes, espaçamentos)
├── script.js                 # Navbar ativa, scroll, menu mobile, alternância de tema
├── favicon.ico                # Ícone da aba do navegador
├── casos/
│   ├── pericia-forense.html            # Case 02 — Perícia forense digital
│   └── analise-rede-corporativa.html   # Case 03 — Análise de rede corporativa
└── assets/
    ├── foto-hero.jpg           # Retrato principal (recorte 4:5 aplicado via CSS)
    ├── foto-sobre.jpg          # Foto secundária (recorte 6:7 aplicado via CSS)
    └── curriculo-douglas.pdf   # Currículo em PDF (download + preview em curriculo.html)
```

Não há mais formulário de contato (removido — os canais diretos de e-mail e LinkedIn
estão na seção "Contato") nem seção de evidências visuais nas páginas de caso (ainda
sem imagens reais para publicar).

## Como usar

Abra `index.html` no navegador — não precisa de servidor. Para servir localmente:

```
cd portfolio-static
python3 -m http.server 5173
```

## Personalizar

- **Cores e tipografia:** edite as variáveis no topo de `style.css` (`:root`).
- **Fotos e CV:** substitua os arquivos em `assets/` mantendo os mesmos nomes.
- **Textos:** todo o conteúdo está em `index.html` (e em cada página de caso, dentro de `casos/`).
- **Tema claro/escuro:** alternância via botão no header, com preferência salva em `localStorage`.
- **Ícones:** biblioteca [Lucide](https://lucide.dev) via CDN, versão fixada em `1.39.0` — para trocar um ícone, use o nome em `data-lucide="..."`.
