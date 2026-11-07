# Projeto Iniciante — Comissão de Infraestrutura

Bem-vindo(a) à comissão! Este projeto é a sua primeira tarefa: você vai construir um site do zero usando só **HTML, CSS e JavaScript**. Não precisa de nada instalado além de um editor de código e um navegador.

- **Prazo total:** 3 semanas a partir do início (a data de entrega é combinada no grupo)
- **Entrega:** link do repositório no GitHub

---

## Como começar

1. Crie sua conta em https://github.com (se ainda não tiver).
2. Nesta página do repositório, clique em **Use this template → Create a new repository**. Dê um nome ao seu projeto e deixe como **Public**.
3. Clone o *seu* repositório no computador e abra a pasta no VS Code (o material de Git está na seção 3).
4. Edite `index.html`, `style.css` e `script.js` e vá fazendo commits ao longo do caminho.

---

## 1. O projeto

O tema é **livre**: escolha algo de que você goste. Prefira um site simples e bem feito a um enorme e pela metade, porque o prazo é de 3 semanas. Sem ideias? Algumas sugestões:

1. Portfólio pessoal (quem você é, o que gosta, o que está aprendendo)
2. Site sobre um jogo, série ou filme favorito
3. Catálogo de filmes, séries ou livros
4. Página de um restaurante ou cafeteria fictício
5. Guia de uma cidade ou de um lugar que você conhece
6. Site de uma banda ou artista

### Requisitos obrigatórios

| # | Requisito | O que significa na prática |
|---|-----------|----------------------------|
| 1 | **Menu** | Navegação entre páginas. Pelo menos **3 páginas** (ex.: Início, Sobre, Contato), e o menu aparece em todas elas, com links funcionando. |
| 2 | **3 elementos dinâmicos** | Pelo menos 3 elementos diferentes que respondem a um evento. Exemplos: botão que troca o tema claro/escuro, menu hambúrguer que abre e fecha, contador, galeria que troca a imagem ao clicar, acordeão (FAQ), abas, quiz, relógio, botão "voltar ao topo". |
| 3 | **Formulário** | Preencher, enviar e **exibir**. Ao enviar, a página mostra na tela o que foi preenchido (ex.: "Obrigado, Maria! Recebemos sua mensagem: ..."), sem recarregar. Valide ao menos um campo (ex.: campo vazio ou e-mail inválido). |
| 4 | **Imagens** | Pelo menos 3 imagens, todas com o atributo `alt`. Use imagens livres (veja a seção de materiais). |
| 5 | **Responsivo** | O site precisa funcionar bem no celular e no computador. Use a tag `viewport`, Flexbox ou Grid, e pelo menos uma `@media query`. |

### Regras

- Só **HTML, CSS e JavaScript puro**. Sem frameworks nem bibliotecas (nada de React, Bootstrap, jQuery, Tailwind).
- Pesquisar, ver tutoriais e usar IA para tirar dúvidas é permitido, mas **você precisa entender o que entregou**.
- Código organizado: arquivos separados (`.html`, `.css`, `.js`), nomes claros, indentação consistente.

### Desafios opcionais (para quem quiser ir além)

- Tema claro/escuro que lembra a escolha do usuário (`localStorage`)
- Consumir uma API pública (ex.: ViaCEP para preencher endereço, uma API de piadas, de clima, de Pokémon)
- Animações com CSS (`transition`, `@keyframes`)
- Publicar o site com GitHub Pages
- Salvar os dados do formulário no `localStorage` e listá-los na página

---

## 2. Cronograma sugerido

### Semana 1 — HTML e CSS
- Instalar o ambiente (VS Code + extensão Live Server) e criar o seu repositório a partir deste modelo
- Estrutura das páginas, menu, imagens, estilo
- Layout responsivo

### Semana 2 — JavaScript
- Elementos dinâmicos (requisito 2)
- Formulário com validação e exibição (requisito 3)

### Semana 3 — Fechamento
- Ajustar detalhes, testar no celular, escrever o README
- Desafios opcionais
- Entrega

---

## 3. Materiais de estudo

Siga esta ordem. Faça os exercícios, não só assista aos vídeos.

### Ambiente e Git
- **VS Code** (editor): https://code.visualstudio.com — instale também a extensão **Live Server**, que recarrega o site sozinho a cada alteração.
- **Git e GitHub:** crie sua conta em https://github.com. Livro em português (capítulos 1 e 2 bastam por enquanto): https://git-scm.com/book/pt-br/v2

### HTML e CSS (semana 1)
- **Curso em Vídeo — HTML5 e CSS3** (Gustavo Guanabara, gratuito). Módulo 1: https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n . Os demais módulos estão no canal: https://www.youtube.com/@CursoemVideo
- **Material de apoio em PDF do curso:** https://github.com/gustavoguanabara/html-css/tree/master/aulas-pdf
- **MDN em português** (documentação de referência, ótima para consultar): https://developer.mozilla.org/pt-BR/docs/Learn_web_development
- **Jogos para treinar layout:** Flexbox Froggy (https://flexboxfroggy.com/#pt-br) e CSS Grid Garden (https://cssgridgarden.com/#pt-br)

### JavaScript (semana 2)
- **Curso em Vídeo — JavaScript e ECMAScript para Iniciantes** (gratuito): https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1

  O que mais importa para o projeto: Módulo 3 (**DOM**) e a aula de **Eventos DOM**. Condições e repetições também vão ser úteis.
- **MDN:** consulte `addEventListener`, `querySelector` e `classList` quando precisar.

### Imagens livres
- Unsplash (https://unsplash.com), Pexels (https://pexels.com) e Pixabay (https://pixabay.com).

### Dicas para não travar
- Teste o site no celular (F12 no navegador → ícone de dispositivo móvel).
- Erro no JavaScript? Abra o **Console** (F12) e leia a mensagem.
- Faça commits pequenos e frequentes (ex.: "adiciona menu", "estiliza formulário").
- Ficou com alguma dúvida? Mande no grupo da comissão de Infraestrutura ou chame os líderes da comissão.

---

## 4. Como entregar

1. Seu repositório já nasceu deste modelo e precisa estar **público**.
2. Suba (push) todos os arquivos: HTML, CSS, JS e imagens.
3. No final do projeto, troque este README por um README do seu projeto (modelo na seção 5), com:
   - Nome do projeto e tema
   - Como abrir/rodar o site
   - Quais são os 3 elementos dinâmicos
   - O que foi mais difícil e o que você aprendeu
4. Envie o **link do repositório** no grupo até a data combinada.

---

## 5. Modelo de README do seu projeto

```markdown
# Nome do projeto

Breve descrição do tema do site.

## Como rodar
Abra o arquivo `index.html` no navegador (ou use a extensão Live Server do VS Code).

## Elementos dinâmicos
1. ...
2. ...
3. ...

## Aprendizados
O que foi mais difícil e o que aprendi.
```
