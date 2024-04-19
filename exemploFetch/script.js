// Isso significa que o código dentro da função será executado assim que a 
// página estiver completamente carregada.
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    const conteudo = document.querySelector(".conteudo");
  
    // Isso percorre todos os elementos a selecionados anteriormente e para cada um deles, 
    // adiciona um event listener para o evento de clique.
    links.forEach(link => {
    //   Isso adiciona um event listener para o evento de clique em cada link. 
    // Quando um link é clicado, a função passada como segundo argumento é executada.
    link.addEventListener("click", function(event) {
        event.preventDefault();
        // Isso faz uma requisição HTTP GET para o URL especificado no atributo href do link 
        // atual (this se refere ao link clicado).
        fetch(this.href)
        // Isso transforma a resposta da requisição em texto.
          .then(response => response.text())
        //   Isso atribui o texto obtido ao conteúdo da div conteudo, substituindo seu conteúdo anterior.
          .then(html => {
            conteudo.innerHTML = html;
          })
          .catch(error => {
            console.error("Erro ao carregar a página:", error);
          });
      });
    });
  });
  