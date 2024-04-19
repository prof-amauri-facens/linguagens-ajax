function pesquisar(event) {
    event.preventDefault()
    let cep = document.querySelector('#cep').value
    if (cep == '') {
        window.alert("Digite o CEP.")
        return
    }
    cep = cep.replace('.','').replace('-', '')
    let carregar = document.querySelector('#carregando')
    
    // Esse trecho de código é uma manipulação do resultado da função consultarCep(cep), que retorna uma Promise. 
    // Quando essa Promise é resolvida, o código dentro do .then() é executado, recebendo os dados do CEP como parâmetro (dados).
     consultarCep(cep).then(dados =>{
        carregar.style.visibility = 'visible'
        document.querySelector('#rua').value = dados.logradouro
        document.querySelector('#bairro').value = dados.bairro
        document.querySelector('#estado').value = dados.uf
        carregar.style.visibility = 'hidden'
    })
}
function consultarCep(cep) {
    // A palavra-chave debugger é usada para pausar a execução do código e iniciar a ferramenta de debug 
    // do navegador (caso esteja disponível e habilitada). Isso é útil para inspecionar variáveis, verificar 
    // o fluxo de execução e depurar problemas no código.
    // debugger
    
    
    //viacep.com.br/ws/01001000/json/
    let link = `https://viacep.com.br/ws/${cep}/json/`
    // A função fetch é usada para fazer uma requisição HTTP para a URL especificada. Ela retorna uma Promise que 
    // resolve para a resposta da requisição.
    return fetch(link).then(resposta => resposta.json())
}