# Aline Contábil — Landing Page

Landing page estática (HTML + CSS + JS puro, sem build) para contadora, com paleta azul escuro + dourado.

## Estrutura

- `index.html` — todas as seções: hero, serviços, sobre/diferenciais, CTA, contato, rodapé e botão flutuante do WhatsApp
- `styles.css` — estilos e responsividade
- `script.js` — menu mobile e destaque do link ativo na navegação
- `assets/` — imagens (hero e foto da contadora)

## Rodar localmente

```bash
python3 -m http.server 3000
# http://localhost:3000
```

## O que personalizar

- Nome, CRC e textos em `index.html`
- Telefone do WhatsApp: trocar `5511999999999` (3 ocorrências) pelo número real no formato `55DDDNÚMERO`
- E-mail, endereço e horário na seção de contato
- Links das redes sociais no rodapé
- Imagens em `assets/hero.jpg` e `assets/about.jpg` (placeholders gerados por IA — substituir por fotos reais)
- Cores no bloco `:root` de `styles.css`
